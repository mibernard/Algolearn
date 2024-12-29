import { exec } from 'child_process';
import os from 'os';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function executeGo(code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const tempDir = path.join(os.tmpdir(), uuidv4());

    fs.mkdirSync(tempDir);

    const fileName = 'main.go';
    const filePath = path.join(tempDir, fileName);
    fs.writeFileSync(filePath, code);

    const dockerCmd = `
      docker run --rm \
      --cpus="0.5" \
  --memory="256m" \
  --memory-swap="512m" \
  --pids-limit="50" \
  --cap-drop=ALL \
  --security-opt no-new-privileges \
      -v ${tempDir}:/usr/src/app \
      algorand-dev-environment:latest \
      go run /usr/src/app/${fileName}
    `;

    exec(dockerCmd, { timeout: 5000 }, (error, stdout, stderr) => {
      fs.rmSync(tempDir, { recursive: true, force: true });
      if (error) {
        if (error.killed) {
          // Possibly a timeout
          return reject('Execution timed out.');
        }
        return reject(stderr || error.message);
      }
      return resolve(stdout);
    });
  });
}
