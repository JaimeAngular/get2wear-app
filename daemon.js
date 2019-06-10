
try {
	const AutoDeploy = require('./AutoDeploy')
	console.log('Running Dressapp Deamon')
} catch(e) {
	console.log('Error: '+JSON.stringify(e))
	console.log('Fail to init AutoDeploy')
}