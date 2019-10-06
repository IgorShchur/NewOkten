const fs = require('fs');
const addStudent =  require('./app.js');
const addPhoto = require('./photo.js')

fs.mkdir('./jscx1800', err =>{
    if (!err){
        console.log('okok');
    }
});
fs.mkdir('./jscx2000', err => {
    if (!err) {
        console.log('bubu');
    }
});




addStudent('jscx1800', 'Vitya', 'I love pancakes');

addStudent('jscx2000', 'Loly', 'I love TV');

addPhoto('jscx1800', 'Vitya', 'photo2.png');

addPhoto('jscx2000', 'Loly', 'photo1.png');