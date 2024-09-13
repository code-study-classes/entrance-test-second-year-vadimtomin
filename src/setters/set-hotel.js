import updater from '../file-updater.js';
import getId from '../getters/get-id.js';
import readlineSync from 'readline-sync';
import reader from '../file-reader.js';
import setRegion from './set-regions.js';

const setHotel = () => {const newHotel = readlineSync.question('New hotel: ').toLowerCase().trim();
    const id = getId('data/hotels.csv');
    const newRegion = readlineSync.question(`Hotel's region: `).toLowerCase().trim();

    const regions = reader('data/regions.csv').split('\n');
    //data from regions (str) -> ['id;name', 'id2;name2'] -> ['id,'name']
    const regionId = regions.filter((string) => {
        const [id, name] = string.split(';');
        return name === newRegion ? true : false;
    })//
    let regId;
    if (regionId.length === 0) {
        console.log(`Region ${newRegion} does not exist`);
        const markToAdd = readlineSync.question('Would you like to add this region? (y/n) ')
        .toLowerCase().trim();
        if (markToAdd === 'y') {
            regId = setRegion(newRegion);    
        } else{
        return false;
        }
    } else {
        regId = regionId.at(0).split(';').at(0);
    }
    //console.log(regionId);
    updater('data/hotels.csv', `\n${id};${newHotel};${regId}`);
    return true;
}
setHotel();