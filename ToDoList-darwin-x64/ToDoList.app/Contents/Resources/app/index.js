const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.getElementById('login')
button.addEventListener('click', () => {
	if(main.login(document.getElementById('email').value, document.getElementById('password').value) == 1){
		var window = remote.getCurrentWindow()
		main.openWindow('app')
		window.close()
	}
}, false)