
import { template } from './electron.menu.config';
import { remote } from 'electron';
const { Menu, MenuItem } = remote;

// import './debug.inspect';

// const menu = remote.Menu.buildFromTemplate(template);
remote.Menu.setApplicationMenu(null);
// remote.Menu.setApplicationMenu(menu);
