import { Injectable } from '@angular/core';
import * as crypto from 'crypto';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';
import * as childProcess from 'child_process';

import { msger } from '../../../electron/electron-renderer-msging';

@Injectable()
export class ElectronService {

    ipcRenderer: typeof ipcRenderer;
    childProcess: typeof childProcess;

    constructor() {
        // Conditional imports
        if (this.isElectron()) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.childProcess = window.require('child_process');

            require('../electron/electron.config');
            require('../electron/debug.inspect')

            // msging
            console.log('renderer: lets send a msg');
            msger.send('default', { msg: 'hello world' }, args => {
                console.log('renderer: got response', args)
            });
        }
    }

    isElectron = () => {
        return window && window.process && window.process.type;
    }

}
