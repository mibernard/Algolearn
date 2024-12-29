import { exec } from 'child_process';
import os from 'os';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Helper to convert a Windows path like "C:\Users\matth\..." to "/mnt/c/Users/matth/..."
function convertWindowsToWSLPath(winPath: string): string {
  // Replace backslashes with forward slashes: "C:/Users/matth/..."
  let p = winPath.replace(/\\/g, '/');

  // If it starts with something like "C:/", prepend "/mnt/"
  // For example, "C:/Users/matth/AppData/Local/Temp" -> "/mnt/c/Users/matth/AppData/Local/Temp"
  const windowsDriveRegex = /^([A-Za-z]):\//;
  if (windowsDriveRegex.test(p)) {
    const drive = p[0].toLowerCase(); // 'c'
    p = `/mnt/host/${drive}${p.substring(2)}`;
  }

  return p;
}

export async function executePython(code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // 1) Create a normal Windows temp directory path:
    //    e.g., "C:\Users\matth\AppData\Local\Temp\some-uuid"
    const rawDir = path.join(os.tmpdir(), uuidv4());

    // 2) Actually create this directory on Windows so the file can be written:
    fs.mkdirSync(rawDir, { recursive: true });

    // 3) Write the user code to "script.py" inside that directory
    const fileName = 'script.py';
    const filePath = path.join(rawDir, fileName);
    fs.writeFileSync(filePath, code);

    // 4) Convert the Windows path to a WSL path so Docker can mount it
    const wslDir = convertWindowsToWSLPath(rawDir);

    // 5) Build the Docker command using the WSL path

    // --cpus="0.5" \
    // --memory="256m" \
    // --memory-swap="512m" \
    // --pids-limit="50" \
    // --cap-drop=ALL \
    // --security-opt no-new-privileges \

    const dockerCmd = `
      docker run --rm \
        -v ${wslDir}:/usr/src/app \
        algorand-dev-environment:latest \
        python3 /usr/src/app/${fileName}
    `;

    console.log(`Docker CMD: ${dockerCmd}`);

    // 6) Execute the Docker command with a 5-second timeout
    exec(dockerCmd, { timeout: 5000 }, (error, stdout, stderr) => {
      // Clean up the Windows temp folder after execution
      // fs.rmSync(rawDir, { recursive: true, force: true });

      if (error) {
        if (error.killed) {
          // Timed out
          return reject('Execution timed out.');
        }
        // Return any stderr or the error message
        return reject(stderr || error.message);
      }
      // Return the container's stdout as the result

      console.log('stdout is:', stdout);
      console.log('stderr is:', stderr);

      return resolve(stdout);
    });
  });
}
