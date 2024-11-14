import axios from 'axios';

const JUDGE0_API_URL = 'https://judge0-ce.p.rapidapi.com/submissions';
const RAPIDAPI_KEY = '15c8f0d337mshf942e9d9c652c94p1890c7jsn88a8e0bcc86d';

type Judge0SubmissionResponse = {
  token: string;
};

type Judge0ResultResponse = {
  status: {
    id: number;
    description: string;
  };
  stdout?: string;
  stderr?: string;
  compile_output?: string;
};

type ErrorWithResponse = {
  response?: {
    data?: {
      message?: string;
      [key: string]: unknown;
    };
  };
};

export async function executeGo(code: string): Promise<string> {
  const submission = {
    source_code: code,
    language_id: 60,
  };

  try {
    console.log('Submitting payload to Judge0 via RapidAPI:', submission);

    const { data } = await axios.post<Judge0SubmissionResponse>(JUDGE0_API_URL, submission, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
    });

    console.log('Received token from Judge0:', data.token);

    const token = data.token;
    for (let i = 0; i < 10; i++) {
      const { data: resultData } = await axios.get<Judge0ResultResponse>(`${JUDGE0_API_URL}/${token}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
      });

      console.log('Polling result data:', resultData);

      if (resultData.status.id > 2) {
        return resultData.stdout || resultData.stderr || resultData.compile_output || 'No output.';
      }

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
    }

    throw new Error('Execution timed out.');
  } catch (error: unknown) {
    if (error instanceof Error) {
      if ('response' in error && (error as ErrorWithResponse).response) {
        const errorResponse = (error as ErrorWithResponse).response?.data;
        console.error('Judge0 API Error Response:', errorResponse);
        throw new Error(`Execution failed: ${errorResponse?.message}`);
      } else {
        console.error('Unexpected Error:', error.message);
        throw new Error('Unexpected error occurred during execution.');
      }
    }
    console.error('Unexpected unknown error:', error);
    throw new Error('An unknown error occurred.');
  }
}
