const electron = require('electron');
const { app, BrowserWindow, globalShortcut } = electron;

let ventana;

app.on('ready', () => {
	ventana = new BrowserWindow();

	ventana.setMenu(null);
	ventana.setTitle("ITIC");
	ventana.loadURL('https://economicasuba.sharepoint.com/sites/Sistemas/AULA-208026/Paginas/Gral-GuiaCurso.aspx');

	ventana.on('closed', () => {
		ventana = null;
	});
});