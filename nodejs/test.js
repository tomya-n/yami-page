const fs = require('fs');
const express = require('express');

const json = fs.readFileSync('./json/counter.json','utf8');
const cObj = JSON.parse(json);
console.log(cObj.count + 1);