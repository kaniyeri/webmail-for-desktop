// Modules to control application life and create native browser window
const { app, BrowserWindow, screen } = require('electron');
const path = require('path');
const os = require('os');

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: width * 0.7,
    height: height * 0.75,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  const platform = os.platform();
  if (platform == 'win32') {
    // add any windows specific things here
  } else if (platform == 'darwin') {
    // add any mac specific things here
  }

  // and load the index.html of the app.
  mainWindow.loadURL('https://webmail-sso.iitb.ac.in');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app
  .whenReady()
  .then(() => {
    createWindow();

    app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
