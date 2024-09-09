import { stat } from 'fs/promises';
import { extname } from 'path';

export function getUnExistingFileName(
  destination: string,
  name: string
): string {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const fileName = `${crypto.randomUUID()}${extname(name)}`;
    if (!stat(`${destination}/${fileName}`)) {
      return fileName;
    }
  }
}
