


const spawn = require('child_process');

spawn.exec("node sender.js", (err, stdout, stderr) => {
	console.log(`stdout: \n${stdout}`);
	console.log(`stderr: ${stderr}`);
});

spawn.exec("node receiver.js", (err, stdout, stderr) => {
	console.log(`stdout: \n${stdout}`);
	console.log(`stderr: ${stderr}`);
});

