const sharp = require('sharp');
const fs = require('fs');

const inputFile = 'input.png'; 
const outputFile = 'output.webp'; 


sharp(inputFile)
    .toFormat('png') 
    .toFile(outputFile)
    .resize(200)
    .then(() => {
        console.log('Image format converted successfully');
    })
    .catch(err => {
        console.error('Error converting image format:', err);
    });
