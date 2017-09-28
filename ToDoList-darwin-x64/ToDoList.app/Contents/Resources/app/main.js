const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
	let win = new BrowserWindow({width: 800, height:600})
	win.loadURL(`file://${__dirname}/index.html`)
})

exports.openWindow = (filename) => {
	let win = new BrowserWindow({width: 800, height: 600})
	win.loadURL(`file://${__dirname}/` + filename + `.html`)
}

exports.login = (email, password) => {
	if(email == 'janani' && password == '1231234'){
		return 1
	}
	return 0
}