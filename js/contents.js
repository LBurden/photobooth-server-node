'use strict';

const fs = require('fs');

exports.getContents = function(req, res) {
    
    const assetsFolder = './assets/';
    
    // Read the assets folder directory
    fs.readdir(assetsFolder, (err, files) => {
        if(err) {
            res.status = 400;
            res.json(err);
        } else {
            res.json({'files': files});
        }
    });
};