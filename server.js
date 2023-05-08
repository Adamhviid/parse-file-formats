import express from "express";
import multer from "multer";

import { readcsv, readjson, readtxt, readxml, readyaml } from "./parseFiles.js";

const app = express();
const upload = multer({ dest: 'uploads/' });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.post("/upload-csv", upload.single('file'), async (req, res) => {
  if (!req.file || !req.file.originalname.endsWith('.csv')) {
    res.status(400).send('Please upload a CSV file');
    return;
  }
  await readcsv(req.file.path).then((data) => {
    res.send(data)
  });
});

app.post("/upload-json", upload.single('file'), async (req, res) => {
  if (!req.file || !req.file.originalname.endsWith('.json')) {
    res.status(400).send('Please upload a JSON file');
    return;
  }
  await readjson(req.file.path).then((data) => {
    res.send(data)
  });
})

app.post("/upload-txt", upload.single('file'), async (req, res) => {
  if (!req.file || !req.file.originalname.endsWith('.txt')) {
    res.status(400).send('Please upload a TXT file');
    return;
  }
  await readtxt(req.file.path).then((data) => {
    res.send(data)
  });
})

app.post("/upload-xml", upload.single('file'), async (req, res) => {
  if (!req.file || !req.file.originalname.endsWith('.xml')) {
    res.status(400).send('Please upload a XML file');
    return;
  }
  await readxml(req.file.path).then((data) => {
    res.send(data)
  });
})

app.post("/upload-yaml", upload.single('file'), async (req, res) => {
  if (!req.file || !req.file.originalname.endsWith('.yaml')) {
    res.status(400).send('Please upload a YAML file');
    return;
  }
  await readyaml(req.file.path).then((data) => {
    res.send(data)
  });
})
