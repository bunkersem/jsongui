"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
// import * as path from 'path';
// import * as crypto from 'crypto';
// import Store from './electron/store';
// import { msger } from './electron/electron-main-msging';
var win, serve;
var args = process.argv.slice(1);
serve = args.some(function (val) { return val === '--serve'; });
if (serve) {
    require('electron-reload')(__dirname, {});
}
function createWindow() {
    var electronScreen = electron_1.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;
    // Create the browser window.
    win = new electron_1.BrowserWindow({
        x: 0,
        y: 0,
        width: size.width,
        height: size.height
    });
    // and load the index.html of the app.
    win.loadURL('file://' + __dirname + '/index.html');
    // Open the DevTools.
    if (serve) {
        win.webContents.openDevTools();
    }
    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}
// try {
//     // This method will be called when Electron has finished
//     // initialization and is ready to create browser windows.
//     // Some APIs can only be used after this event occurs.
//     app.on('ready', createWindow);
//     // Quit when all windows are closed.
//     app.on('window-all-closed', () => {
//         // On OS X it is common for applications and their menu bar
//         // to stay active until the user quits explicitly with Cmd + Q
//         if (process.platform !== 'darwin') {
//             app.quit();
//         }
//     });
//     app.on('activate', () => {
//         // On OS X it's common to re-create a window in the app when the
//         // dock icon is clicked and there are no other windows open.
//         if (win === null) {
//             createWindow();
//         }
//     });
// } catch (e) {
//     // Catch Error
//     // throw e;
// }
// console.log('everyting ready');
// msger.addReciever('default', (msgArgs, cb) => {
//     console.log('main: got msg from renderer', msgArgs);
//     // emulate task
//     setTimeout(() => {
//         cb({ pi: Math.PI });
//     }, 100);
// });
