import { app, BrowserWindow, ipcRenderer, screen, ipcMain } from 'electron';
import { rndSig, rndId } from './electron-msging';

function send(target: Electron.BrowserWindow, reciever: string, args: {}, cb: (arg: {}) => void) {
    const id = rndSig(reciever);
    ipcMain.once(id, (event, data) => {
        if (data.error) { // handle error TODO
            throw Error(data.error);
        } else {
            cb(args);
        }
    });
    target.webContents.send('probe', {
        reciever,
        id,
        args,
    });
}

const recievers = []

export const msger: {
    send: (target: Electron.BrowserWindow, reciever: string, args: {}, cb: (arg: {}) => void) => void,
    addReciever: (name: string, handler: (args, cb: (args) => void) => void) => void
} = {
        send,
        addReciever: (name, handler) => {
            if (recievers[name]) {
                throw Error('reciever already exists');
            }
            console.log('main: adding reciever')
            recievers[name] = handler;
        }
    };


ipcMain.on('probe', (event, data) => {
    console.log('main: probe got called');
    const { reciever, id, args } = data;
    if (!recievers[reciever]) {
        // errror not found TODO
        console.log('reciever', reciever, 'not found in', recievers);
        event.sender.send(id, { error: 'reciever-not-found' });
        return;
    }
    recievers[reciever](args, retArgs => {
        console.log('sending', retArgs, 'to render process');
        event.sender.send(id, { args: retArgs });
    });
});

