'use strict';

const fs = require('fs');

exports.uploadFile = function(req, res) {
    if(req.body.image && req.body.file_name){
        // Store request parameters
        const base64str = req.body.image;
        const fileName = req.body.file_name;
        
        // Store image data from the base64 string
        const base64Image = base64str.split(';base64,').pop();

        // Create timestamp for the file name
        const date = new Date();
        const timestamp = `${date.getFullYear()}_${date.getMonth()}_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;

        // Append the timestamp and filename together
        const fullFilePath = `assets/${timestamp}_${fileName}.png`;
        
        // Write the file to assets folder
        fs.writeFile(fullFilePath, base64Image, {encoding: 'base64'}, function(err) {
            if (err) {
                console.log('Error', err);
                res.status(400);
                res.json(err);
            } else {
                res.json({'filename': fileName})
            }
        });
    } else {
        console.log('Error', 'An image or file type was not provided');
        res.status(400);
        res.json('An image or file type was not provided');
    }
};
