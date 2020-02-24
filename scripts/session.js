
const uuid = require('uuid');

function getSessionId(){
    let sessionId = uuid();
    console.log("sessionID generated: ",sessionId);
    return sessionId;
}

module.exports = getSessionId;
