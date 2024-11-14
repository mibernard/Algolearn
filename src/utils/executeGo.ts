import axios from 'axios';

// Define Judge0 RapidAPI details
const JUDGE0_API_URL = 'https://judge0-ce.p.rapidapi.com/submissions'; // RapidAPI endpoint
const RAPIDAPI_KEY = '15c8f0d337mshf942e9d9c652c94p1890c7jsn88a8e0bcc86d'; // Your X-RapidAPI-Key from the screenshot

type Judge0SubmissionResponse = {
  token: string;
};

type Judge0ResultResponse = {
  status: {
    id: number; // 1: In Queue, 2: Processing, 3: Completed, etc.
    description: string;
  };
  stdout?: string; // Output of the code execution
  stderr?: string; // Error output, if any
  compile_output?: string; // Compilation errors, if any
};

export async function executeGo(code: string): Promise<string> {
  const submission = {
    source_code: code,
    language_id: 60, // Go Language ID
  };

  try {
    console.log('Submitting payload to Judge0 via RapidAPI:', submission);

    // Submit the code for execution
    const { data } = await axios.post<Judge0SubmissionResponse>(JUDGE0_API_URL, submission, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': RAPIDAPI_KEY, // Add RapidAPI key
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com', // Add RapidAPI host
      },
    });

    console.log('Received token from Judge0:', data.token);

    // Poll the API for results
    const token = data.token;
    for (let i = 0; i < 10; i++) {
      const { data: resultData } = await axios.get<Judge0ResultResponse>(`${JUDGE0_API_URL}/${token}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': RAPIDAPI_KEY, // Add RapidAPI key
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com', // Add RapidAPI host
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
      if ('response' in error && error.response) {
        console.error('Judge0 API Error Response:', (error.response as any).data);
        throw new Error(`Execution failed: ${(error.response as any).data.message}`);
      } else {
        console.error('Unexpected Error:', error.message);
        throw new Error('Unexpected error occurred during execution.');
      }
    }
    console.error('Unexpected unknown error:', error);
    throw new Error('An unknown error occurred.');
  }
}
