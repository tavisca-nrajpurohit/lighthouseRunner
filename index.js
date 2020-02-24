const config = require('./config');
const express = require('express');
const getSessionID = require('./scripts/session');
const app = express();
const port = config.port;

app.get('/', (req, res) => {
    let sessionId= getSessionID();
    res.send('sessionID: '+sessionId+'.');
});

app.listen(port, () => console.log(`Lighthouse Runner listening on http://localhost:${port}`));