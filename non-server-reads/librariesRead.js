import fs from 'fs';
import csv from 'csv-parser';
import jsonfile from 'jsonfile';
import xml2js from 'xml2js';
import yaml from 'yamljs';

function readcsv() {
  console.log('CSV file content: ')
  fs.createReadStream('./files/me.csv')
    .pipe(csv())
    .on('data', (row) => {
      console.log(row);
    })
}

function readjson() {
  jsonfile.readFile('./files/me.json', (err, data) => {
    console.log('')
    console.log('JSON file content: ')
    console.log(data);

  });
}

function readtxt() {
  fs.readFile('./files/me.txt', 'utf8', (err, data) => {
    console.log('')
    console.log('txt file content: ')
    console.log(data);
  });
}


function readxml() {
  const parser = new xml2js.Parser();
  fs.readFile('./files' + '/me.xml', function (err, data) {
    parser.parseString(data, function (err, result) {
      console.log('')
      console.log('XML file content: ')
      console.dir(result);
    });
  });
}

function readyaml() {
  yaml.load('./files/me.yaml', (data) => {
    console.log('')
    console.log('YAML file content: ')
    console.log(data);
  })
}

readcsv();
readjson();
readtxt();
readxml();
readyaml();