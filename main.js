const {app, BrowserWindow} = require('electron')
const { ipcMain } = require("electron")
const path = require('path')

let ventana
function createWindow(){
    ventana = new BrowserWindow({
        width : 500,
        height : 500,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    })
    ventana.loadFile('index.html')
}
app.whenReady().then(createWindow)