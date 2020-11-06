const { app, BrowserWindow, Menu } = require("electron");
const port = require("../port");
const getIpLocal = require("../iplocal");

function createWindow() {
  // Cree la fenetre du navigateur.

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 480,
    show: true,
    title: "My App",
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: true,
    transparent: false,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`http://localhost:${port}`);
  setMainMenu();
}
function setMainMenu() {
  const template = [
    {
      label: "QR Code reader for mac",
      submenu: [
        {
          label: "Quit",
          accelerator: "Command+Q",
          click() {
            app.quit();
          },
        },
        {
          label: "Hello",
          accelerator: "Shift+CmdOrCtrl+H",
          click() {
            alert("HELLO");
          },
        },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

const runElectron = () => {
  if (typeof app !== "undefined") {
    // app.dock.hide();

    app.whenReady().then(createWindow);
  }
};
module.exports = { run: runElectron };
