var electron = require('electron');
var app = electron.app;

var BrowserWindow = electron.BrowserWindow;

var mainWindow;
app.on('ready', function() {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		resizable: false,
		movable: false,
		alwaysOnTop: true,
		fullscreen: true,
		minimizable: false,
		maximizable: true,
		closable: false,
		title: "CBT SMA N 1 KUTA",
		frame: false,
		thickFrame: false
	});
	mainWindow.loadURL('http://www.mahendrawardana.com');

	mainWindow.on('app-command', (e, cmd) => {
	  // Navigate the window back when the user hits their mouse back button
	  if (cmd === 'browser-backward' && win.webContents.canGoBack()) {
	    win.webContents.goBack()
	  }
	})
});