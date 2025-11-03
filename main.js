const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 640,
    title: 'Example',
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const buildIndex = path.join(__dirname, './build/index.html');
  const publicIndex = path.join(__dirname, './public/index.html');
  const target = require('fs').existsSync(buildIndex) ? buildIndex : publicIndex;

  mainWindow.loadURL(url.format({
    pathname: target,
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('window-maximize-state', true);
  });
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('window-maximize-state', false);
  });

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('window-minimize', () => { if (mainWindow) mainWindow.minimize(); });
ipcMain.on('window-maximize', () => { if (mainWindow) mainWindow.maximize(); });
ipcMain.on('window-unmaximize', () => { if (mainWindow) mainWindow.unmaximize(); });
ipcMain.on('window-close', () => { if (mainWindow) mainWindow.close(); });
ipcMain.handle('window-is-maximized', () => (mainWindow ? mainWindow.isMaximized() : false));