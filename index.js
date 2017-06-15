const { app, BrowserWindow } = require('electron');

var mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    title: 'Drag and drop test',
    webPreferences: {
      nodeIntegration: false
    }
  });

  mainWindow.loadURL("http://html5demos.com/drag");
  mainWindow.show();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
