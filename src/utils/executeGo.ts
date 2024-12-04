import axios from 'axios';

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const JUDGE0_API_URL = process.env.JUDGE0_API_URL;
const JUDGE0_HOST = process.env.JUDGE0_HOST;

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

    if (!JUDGE0_API_URL) {
      throw new Error('JUDGE0_API_URL is not defined. Please check your environment variables.');
    }

    const { data } = await axios.post<Judge0SubmissionResponse>(JUDGE0_API_URL, submission, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': JUDGE0_HOST,
      },
    });

    console.log('Received token from Judge0:', data.token);

    const token = data.token;
    for (let i = 0; i < 10; i++) {
      const { data: resultData } = await axios.get<Judge0ResultResponse>(`${JUDGE0_API_URL}/${token}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': JUDGE0_HOST,
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
