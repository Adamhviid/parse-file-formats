import { readFile } from "fs";

readFile("files/me.csv", (err, data) => {
  console.log("CSV file content: ");
  console.log(data.toString());
});

readFile("files/me.json", (err, data) => {
  console.log("JSON file content: ");
  console.log(data.toString());
});

readFile("files/me.txt", (err, data) => {
  console.log("Text file content: ");
  console.log(data.toString());
});

readFile("files/me.xml", (err, data) => {
  console.log("XML file content: ");
  console.log(data.toString());
});

readFile("files/me.yaml", (err, data) => {
  console.log("YAML file content: ");
  console.log(data.toString());
});





