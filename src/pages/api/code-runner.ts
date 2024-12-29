import type { NextApiRequest, NextApiResponse } from 'next';
import { executeJavaScript } from '@/utils/executeJavaScript';
import { executePython } from '@/utils/executePython';
import { executeGo } from '@/utils/executeGo';

type Data = {
  output?: string;
  error?: string;
};

type ErrorWithResponse = {
  response?: {
    data?: unknown;
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('Request body:', req.body); // Log the request body

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { code, language } = req.body;

  if (!code || !language) {
    console.error('Missing code or language:', { code, language });
    return res.status(400).json({ error: 'Code and language are required.' });
  }

  try {
    let output: string;

    switch (language.toLowerCase()) {
      case 'javascript':
        // This will run Node in Docker (as defined in executeJavaScript.ts)
        output = await executeJavaScript(code);
        break;
      case 'python':
        output = await executePython(code);
        break;
      case 'go':
        output = await executeGo(code);
        break;
      default:
        console.error('Unsupported language:', language);
        return res.status(400).json({ error: 'Unsupported language.' });
    }

    console.log('Execution output:', output);
    return res.status(200).json({ output });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Unhandled error:', error);

      if ('response' in error && (error as ErrorWithResponse).response) {
        const errorResponse = (error as ErrorWithResponse).response?.data;
        console.error('Error Response:', errorResponse);
      }

      return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }

    console.error('Unhandled unknown error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
