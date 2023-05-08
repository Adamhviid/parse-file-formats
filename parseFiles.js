import fs from 'fs';
import csv from 'csv-parser';
import jsonfile from 'jsonfile';
import xml2js from 'xml2js';
import yaml from 'yamljs';

function readcsv(file) {
  return new Promise((resolve) => {
    const results = [];
    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => {
        resolve(results);
      });
  });
}

function readjson(file) {
  return new Promise((resolve) => {
    jsonfile.readFile(file, (err, data) => {
      resolve(data);
    });
  });
}

function readtxt(file) {
  return new Promise((resolve) => {
    fs.readFile(file, 'utf8', (err, data) => {
      resolve(data);
    });
  });
}

function readxml(file) {
  return new Promise((resolve) => {
    const parser = new xml2js.Parser();
    fs.readFile(file, function (err, data) {
      parser.parseString(data, function (err, result) {
        resolve(result);
      });
    });
  });
}

function readyaml(file) {
  return new Promise((resolve) => {
    const data = yaml.load(file);
    resolve(data);
  });
}

export { readcsv, readjson, readtxt, readxml, readyaml };
