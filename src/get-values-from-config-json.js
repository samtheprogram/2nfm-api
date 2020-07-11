// Muaz Khan      - www.MuazKhan.com
// MIT License    - www.WebRTC-Experiment.com/licence
// Documentation  - github.com/muaz-khan/RTCMultiConnection

function getValues(param) {
    var fs = require('fs');
    var getJsonFile = require('./getJsonFile.js');

    var DEFAULTS = {
        socketURL: '/',
        dirPath: null,
        homePage: '/demos/index.html',
        socketMessageEvent: 'RTCMultiConnection-Message',
        socketCustomEvent: 'RTCMultiConnection-Custom-Message',
        port: process.env.PORT || 9001,
        enableLogs: false,
        autoRebootServerOnFailure: false,
        isUseHTTPs: null,
        sslKey: null,
        sslCert: null,
        sslCabundle: null,
        enableAdmin: false,
        adminUserName: null,
        adminPassword: null
    };

    if (!fs.existsSync(param.config)) {
        console.log('File does not exist', param.config);
        return Object.assign({}, DEFAULTS);
    }

    return Object.assign({}, DEFAULTS, getJsonFile(param.config));
}

module.exports = exports = getValues;
