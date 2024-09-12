import updater from '../file-updater.js';
import getId from '../getters/get-id.js';
import readlineSync from 'readline-sync';
import reader from '../file-reader.js';

const newHotel = readlineSync.question('New hotel: ').toLowerCase().trim();
const id = getId('data/hotels.csv');
const newRegion = readlineSync.question(`Hotel's region: `).toLowerCase().trim();

const regions = reader('data/regions.csv').split('\n');
const regionId = regions.filter((string) => {
    const [id, name] = string.split(';');
    return name === newRegion ? true : false;
}).at(0).split(';').at(0);
console.log(regionId);
updater('data/hotels.csv', `\n${id};${newHotel};${regionId}`);
//data from regions (str) -> ['id;name', 'id2;name2'] -> ['id,'name']