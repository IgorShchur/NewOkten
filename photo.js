const fs = require('fs');



module.exports = (group, name, photoname) => {

    const myReadPhoto = fs.createReadStream(`./photo/${photoname}`);

    const myWritePhoto = fs.createWriteStream(`./${group}/${name}/${photoname}`);

    

    myReadPhoto.pipe(myWritePhoto);

}

