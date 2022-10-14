
var express = require('express');
var router = express.Router();

const anaSayfa =  function(req, res, next) {
  res.render('anasayfa', { title: 'Anasayfa' });
  }

const mekanBilgisi =  function(req, res, next) {
  res.render('Mekanbilgisi', { title: 'Mekanbilgisi' });
  }

const yorumEkle =  function(req, res) {
  res.render('yorumekle', { title: 'Yorum Sayfası'});
  }

  module.exports= {
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
  }


