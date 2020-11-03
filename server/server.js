const fs = require('fs'); 
const path = require('path');


const chirpsPath = path.join(__dirname, '../chirps.json');


fs.readFile(chirpsPath, (err, data) => { 

    if (err) {
        console.log(err);
        return;
    }

    const chirps = JSON.parse(data);

    console.log(chirps) 

});