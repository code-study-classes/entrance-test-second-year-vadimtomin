import fs from 'fs';
import getPath from './get-path.js';



  /*  const filePath = getPath('data/regions.csv');
    const newData = readlineSync.question('New region: ').toLowerCase().trim();
    const actualData = reader('data/regions.csv');
    const newId = actualData.split('\n').length;
    fs.appendFileSync(filePath,`\n${newId};${newData}`, 'utf-8');*/

    const updater = (fPath,pattern) => {
        const filePath =getPath(fPath);
        fs.appendFileSync(filePath, pattern, 'utf-8');
        return true;
    };

    export default updater;
