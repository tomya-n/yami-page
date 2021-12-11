require('dotenv').config();
const axios = require('axios');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('static'));
app.set('view engine', 'pug');

const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API}`;

app.get("/",(req,res) => { 
    axios.get(url).then(res =>{
      const obj = res.data.data;
      const title = obj.title;
      const url = obj.images.downsized_large.url;
      const imgInfo = {title,url};
      return imgInfo;
    }).then(imgInfo =>{
      res.render('index', { title: imgInfo.title , url: imgInfo.url });
    })
})

app.listen('3001', () => {
  console.log('port3001-----------------------------------------------------------------------');
});
