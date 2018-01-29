"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var electron_msging_1 = require("./electron-msging");
function send(target, reciever, args, cb) {
    var id = electron_msging_1.rndSig(reciever);
    electron_1.ipcMain.once(id, function (event, data) {
        if (data.error) {
            throw Error(data.error);
        }
        else {
            cb(args);
        }
    });
    target.webContents.send('probe', {
        reciever: reciever,
        id: id,
        args: args
    });
}
var recievers = [];
exports.msger = {
    send: send,
    addReciever: function (name, handler) {
        if (recievers[name]) {
            throw Error('reciever already exists');
        }
        console.log('main: adding reciever');
        recievers[name] = handler;
    }
};
electron_1.ipcMain.on('probe', function (event, data) {
    console.log('main: probe got called');
    var reciever = data.reciever, id = data.id, args = data.args;
    if (!recievers[reciever]) {
        // errror not found TODO
        console.log('reciever', reciever, 'not found in', recievers);
        event.sender.send(id, { error: 'reciever-not-found' });
        return;
    }
    recievers[reciever](args, function (retArgs) {
        console.log('sending', retArgs, 'to render process');
        event.sender.send(id, { args: retArgs });
    });
});
