'use strict';

const express = require ('express');
const {clothesInterface} = require('../models');
const router = express.Router();

router.post('/clothes', async(req,res,next) => {
  let clothes= await clothesInterface.create(req.body);
  res.status(200).send(clothes);
});

router.get('/clothes', async(req,res,next) => {
  let clothes= await clothesInterface.read();
  res.status(200).send(clothes);
});

router.get('/clothes/:id', async(req,res,next)=> {
  let {id}=req.params;
  let clothes= await clothesInterface.read(id);
  res.status(200).send(clothes);
});

router.put('/clothes/:id', async(req,res,next) => {
  let {id}=req.params;
  await clothesInterface.update(req.body,id);
  let clothes= await clothesInterface.read(id);
  res.status(200).send(clothes);
});

router.delete('./clothes/:id', async(req,res,next) => {
  let {id}=req.params;
  await clothesInterface.destroy(id);
  res.status(200).send('Clothes destroyed');
});




module.exports = router;
