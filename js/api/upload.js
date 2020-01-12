'use strict';

const upload = require('../upload.js');

module.exports = function(app) {
    app.route('/upload').post(upload.uploadFile);
};
