import axios from 'axios';

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const JUDGE0_API_URL = process.env.JUDGE0_API_URL;
const JUDGE0_HOST = process.env.JUDGE0_HOST;

type Judge0Response = {
  token: string;
  status: { id: number; description: string };
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

export async function executePython(code: string): Promise<string> {
  const submission = {
    source_code: code,
    language_id: 71, // Python 3
  };

  try {
    // Submit the code
    if (!JUDGE0_API_URL) {
      throw new Error('JUDGE0_API_URL is not defined. Please check your environment variables.');
    }
    const { data: submissionResponse } = await axios.post<Judge0Response>(JUDGE0_API_URL, submission, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': JUDGE0_HOST,
      },
    });

    const token = submissionResponse.token;

    // Poll for result
    for (let i = 0; i < 10; i++) {
      const { data: result } = await axios.get<Judge0Response>(`${JUDGE0_API_URL}/${token}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': JUDGE0_HOST,
        },
      });

      if (result.status.id > 2) {
        // Execution complete
        return result.stdout || result.stderr || result.compile_output || 'No output.';
      }

      // Wait 1 second before retrying
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
