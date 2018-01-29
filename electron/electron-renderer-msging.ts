import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';
import * as childProcess from 'child_process';
import { rndSig, rndId } from './electron-msging';

function send(reciever: string, args: {}, cb: (arg: {}) => void) {
    const id = rndSig(reciever);
    ipcRenderer.once(id, (event, data) => {
        if (data.error) { // handle error TODO
            throw Error(data.error);
        } else {
            cb(data.args);
        }
    });
    ipcRenderer.send('probe', {
        reciever,
        id,
        args,
    });
}

const recievers = [];


export const msger: {
    send: (reciever: string, args: {}, cb: (arg: {}) => void) => void,
    addReciever: (name: string, handler: (args, cb: (args) => void) => void) => void
} = {
    send,
    addReciever: (name, handler) => {
        if (recievers[name]) {
            throw Error('reciever already exists');
        }
        console.log('renderer: adding reciever')
        recievers[name] = handler;
    }
};

ipcRenderer.on('probe', (event, data) => {
    console.log('renderer: probe got called');
    const { reciever, id, args } = data;
    if (! recievers[reciever]) {
        // errror not found TODO
        ipcRenderer.send(id, { error: 'reciever-not-found' });
        return;
    }
    recievers[reciever](args, retArgs => {
        ipcRenderer.send(id, { args: retArgs });
    });
});

