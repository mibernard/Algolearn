import { loadPyodide, PyodideInterface } from 'pyodide';

let pyodideInstance: PyodideInterface | null = null;

export async function executePython(code: string): Promise<string> {
  // Load Pyodide if not already loaded
  if (!pyodideInstance) {
    console.log('Loading Pyodide...');
    pyodideInstance = await loadPyodide();
    console.log('Pyodide loaded successfully.');
  }

  try {
    // Redirect Python's stdout to capture `print` output
    pyodideInstance.runPython(`
import sys
from io import StringIO

sys.stdout = StringIO()
sys.stderr = StringIO()
    `);

    // Execute user code
    pyodideInstance.runPython(code);

    // Capture stdout and stderr
    const stdout = pyodideInstance.runPython('sys.stdout.getvalue()');
    const stderr = pyodideInstance.runPython('sys.stderr.getvalue()');

    if (stderr) {
      console.error('Python stderr:', stderr);
      return `Error: ${stderr}`;
    }

    return stdout || ''; // Return stdout or an empty string if no output
  } catch (error: unknown) {
    // Handle any errors during execution
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Execution error:', message);
    return `Error: ${message}`;
  }
}
