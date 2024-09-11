import fs from 'fs';
import getPath from './get-path.js';

const reader = (fPath) => {
    const filePath = getPath(fPath);
    const fileData = fs.readFileSync(filePath, 'utf-8');
    return fileData;
}
export default reader;