const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const limit = '500mb';

app.use( cors() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json( { limit: limit } ) );

require('./js/api/upload')(app);
require('./js/api/contents')(app);

// Start the Express app on port 9000
app.listen(9000);
