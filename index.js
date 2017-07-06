const {app} = require('electron')
const {BrowserWindow} = require('electron')

console.log(' => ' + __dirname);

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html')
})﻿;