const sharp = require('sharp');
const axios = require('axios');
const fs = require('fs');


const imageUrl = 'https://fileinfo.com/img/ss/xl/png_79-2.jpg'; 

const outputFile = 'output.webp'; 


const downloadImage = async () => {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        return response.data;
    } catch (error) {
        throw new Error(`Error downloading image from URL: ${error.message}`);
    }
};

const processImage = async () => {
    try {
        
        const imageData = await downloadImage();
     
        const convertedImageBuffer = await sharp(imageData)
            .toFormat('webp')
            //  .webp({ quality: 80 }) 
            .resize(375)
            .toBuffer();

     
        fs.writeFileSync(outputFile, convertedImageBuffer);
        console.log('Image format converted successfully');
    } catch (error) {
        console.error('Error converting image format:', error);
    }
};


processImage();
