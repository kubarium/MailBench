const electron = require('electron')
const {app, BrowserWindow} = electron
const client = require('electron-connect').client

let win

const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window.
  if (win) {
    if (win.isMinimized()) 
        win.restore()
    win.focus()
  }
})

if (shouldQuit) {
  app.quit()
}

app.on("ready", () => {
    win = new BrowserWindow({})
    win.loadURL(`file://${__dirname}/index.html`)
    win.openDevTools()
    //win.maximize()
    win.center()
    //Menu.setApplicationMenu(new Menu())
    client.create(win)
})

