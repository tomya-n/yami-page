const express = require('express');
const router = express.Router();
const axios = require('axios');

const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API}`;

router.get("/",(req,res) => { 
  axios.get(url).then(res =>{
    const obj = res.data.data;
    const title = obj.title;
    const url = obj.images.downsized_large.url;
    const imgInfo = {title,url};
    return imgInfo;
  }).then(imgInfo =>{
    res.render('random-gif', { title: imgInfo.title , url: imgInfo.url });
  })
})

module.exports = router;
