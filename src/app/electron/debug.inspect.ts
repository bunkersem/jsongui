// Importing this adds a right-click menu with 'Inspect Element' option
import { remote } from 'electron';
const { Menu, MenuItem } = remote;

let rightClickPosition = null

const menu = new Menu()
const menuItem = new MenuItem({
  label: 'Inspect Element',
  click: () => {
    (<any>remote.getCurrentWindow()).inspectElement(rightClickPosition.x, rightClickPosition.y)
  }
})
menu.append(menuItem)

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  rightClickPosition = {x: e.x, y: e.y}
  menu.popup(remote.getCurrentWindow())
}, false)
