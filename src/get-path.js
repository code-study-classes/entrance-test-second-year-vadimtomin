import { fileURLToPath } from 'url'; // ф-я б получает путь к этому файлу
import path from 'path';


const getPath = (fPath) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, '..', fPath);

    return filePath;
}

export default getPath;