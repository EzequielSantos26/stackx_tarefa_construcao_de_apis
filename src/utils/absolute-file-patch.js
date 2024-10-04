
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname (__filename);
const relativeFilePatch = "../database/data.json";
 export const absoluteFilePatch = path.join(__dirname, relativeFilePatch);