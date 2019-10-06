const fs = require('fs');

module.exports = (group, name, info) => {
    fs.mkdir(`./${group}/${name}`, {recursive:true}, err => {
        if (!err) {
            console.log('bubu');
        }
    });

    fs.writeFile(`./${group}/${name}/info.txt`, info, () =>{
        console.log(info);
    });
};