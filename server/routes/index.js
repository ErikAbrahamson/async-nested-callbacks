var express = require('express');
var router = express.Router();
var fs = require('fs');
var sentence = '', currentFile, nextArg;

function divide(data) {
  return data.split('\n');
}

fs.readFile('./files/start.txt', 'utf8', function(err, data) {
  currentFile = divide(data);
  sentence += currentFile[0] + ' ';
  nextArg = './files/' + currentFile[1];
  fs.readFile(nextArg, 'utf8', function(err, data) {
    currentFile = divide(data);
    sentence += currentFile[0] + ' ';
    nextArg = './files/' + currentFile[1];
    fs.readFile(nextArg, 'utf8', function(err, data) {
      sentence += data;
      console.log(sentence);
      return sentence;
    });
  });
});

module.exports = router;
