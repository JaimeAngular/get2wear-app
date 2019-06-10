const telegram = require('telegram-bot-api')
const config = require('./config')
const { spawn } = require('child_process')
const myUserId = '326763992'
const myUsername = 'cjortegon'

// Bot
const bot = new telegram({
    token: config.telegram.token,
    updates: {
        enabled: true,
        get_interval: 15000 //300000 : 5 minutes //60000 : 1 minute //
    }
})
bot.on('message', function(message) {
    if(message != undefined) {
        // console.log('-----> '+JSON.stringify(message))
        let userId = message.from.id
        let user = message.chat.username
        let text = message.text
        // console.log("@"+user+": "+text)
        if(userId == myUserId && user == myUsername) {
            // console.log('Soy yo')
            exectueCommand(text)
        } else {
            // console.log('No soy yo')
        }
}})

function exectueCommand(text) {
    // console.log(`exectueCommand(${text})`)
    let command = text.split(' ')
    switch(command[0]) {

        case 'ping':
        sendMessage(`pong`)
        break

        case 'pull':
        pull()
        break

        case 'ls':
        ls()
        break

        case 'pwd':
        pwd()
        break

        case 'nodev':
        nodev()
        break

        case 'forever':
        if(command.length > 1) {
            let argument = command[1]
            if(argument == 'start' || argument == 'stop' || argument == 'list') {
                forever(argument)
            } else {
                sendMessage(`invalid forever argument`)
            }
        } else {
            sendMessage(`forever needs an argument`)
        }
        break

        case 'deploy':
        deploy()
        break

        default:
        sendMessage(`command '${command[0]}' not found`)
    }
}

const git = {
    user: process.env.DRESSAPP_GIT_USER,
    password: process.env.DRESSAPP_GIT_PASSWORD
}
function pull(gitCredentials) {
    const command = spawn('git', ['pull', `https://${git.user}:${git.password}@bitbucket.org/mountainreacher/dressapp-webapp.git`])
    command.stderr.on( 'data', data => {
        sendMessage(`stderr: ${data}`)
    })
    command.stdout.on('data', (data) => {
        sendMessage(`stdout: ${data}`)
    })
}

function ls() {
    const command = spawn('ls', ['-lh'])
    command.stdout.on('data', (data) => {
        sendMessage(`stdout: ${data}`)
    })
}

function pwd() {
    const command = spawn('pwd', [])
    command.stdout.on('data', (data) => {
        sendMessage(`stdout: ${data}`)
    })
}

function nodev() {
    const command = spawn('node', ['-v'])
    command.stdout.on('data', (data) => {
        sendMessage(`stdout: ${data}`)
    })
}

function forever(command) {
    let params = [command]
    if(command != list) {
        params.push('server.js')
    }
    const command = spawn('forever', params)
    command.stdout.on('data', (data) => {
        sendMessage(`stdout: ${data}`)
    })
}

function deploy() {
    let command = spawn('forever', ['stop', 'server.js'])
    command.stderr.on( 'data', data => {
        sendMessage(`stderr: ${data}`)
    })
    command.stdout.on('data', (data) => {
        command = spawn('forever', ['start', 'server.js'])
        command.stderr.on( 'data', data => {
            sendMessage(`stderr: ${data}`)
        })
        command.stdout.on('data', (data) => {
            sendMessage(`stdout: ${data}`)
        })
    })
}

function sendMessage(text) {
    bot.sendMessage({
        chat_id: myUserId,
        text
    }).then(function(message) {
    }).catch(function(err) {
    })
}