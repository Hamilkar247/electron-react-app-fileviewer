const { app, BrowserWindow } = require('electron') 

require("@electron/remote/main").initialize()

function createWindow() {
    //Create the browser window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true
        }
    })

    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)

//Quit when all windows are close.
app.on('window-all-closed', function () {
    // On OS X it is common for application and their menu bar
    // to stay active until the user quits explicitly with cmd + Q
    if (process.platform !== 'darwin'){
      app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to recreate a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})