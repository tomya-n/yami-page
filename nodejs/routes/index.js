const express = require('express');
const router = express.Router();
const fs = require('fs');
// const day = require('dayjs');


router.get("/",(req,res) => { 
  let readJson = fs.readFileSync('./json/counter.json','utf8');
  readJson = JSON.parse(readJson);
  readJson.count++;
  const counterInt = readJson.count;
  readJson = JSON.stringify(readJson);
  const writeJson = fs.writeFileSync('./json/counter.json',readJson);
  
  console.log(counterInt);
  res.render('index',{'count': counterInt});
})

module.exports = router;
