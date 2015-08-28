var express = require('express');
var router = express.Router();
var fs = require('fs');
var sentence = '', currentFile;
var nextArg;

fs.readFile('./files/start.txt', 'utf8', function(err, data) {
  currentFile = data.split('\n');
  sentence += currentFile[0] + ' ';
  nextArg = './files/' + currentFile[1];
  fs.readFile(nextArg, 'utf8', function(err, data) {
    currentFile = data.split('\n');
    sentence += currentFile[0] + ' ';
    nextArg = './files/' + currentFile[1];
    fs.readFile(nextArg, 'utf8', function(err, data) {
      currentFile = data.split('\n');
      sentence += currentFile[0];
      console.log(sentence);
      return sentence;
    });
  });
});

module.exports = router;
