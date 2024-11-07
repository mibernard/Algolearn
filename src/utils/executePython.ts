// /utils/executePython.ts

import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export async function executePython(code: string): Promise<string> {
  const tmpDirPath = path.join(process.cwd(), 'tmp');
  if (!fs.existsSync(tmpDirPath)) {
    fs.mkdirSync(tmpDirPath);
  }
  return new Promise((resolve, reject) => {
    const id = uuidv4();
    const filename = `user_code_${id}.py`;
    // const filepath = path.join('/tmp', filename);
    const filepath = path.join(process.cwd(), 'tmp', filename);

    fs.writeFile(filepath, code, (err) => {
      if (err) return reject(new Error('Failed to write code file.'));

      // Execute the Python code inside a Docker container
      exec(
        `docker run --rm -v ${process.cwd()}/tmp:/usr/src/app -w /usr/src/app python:3.9 python ${filename}`,
        { timeout: 5000 },
        (error, stdout, stderr) => {
          fs.unlink(filepath, () => {}); // clean up file
          if (error) return reject(new Error(stderr || error.message));
          resolve(stdout);
        }
      );
    });
  });
}
