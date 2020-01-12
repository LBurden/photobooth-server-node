'use strict';

const contents = require('../contents.js');

module.exports = function(app) {
    app.route('/contents').get(contents.getContents);
};
