'use strict';

const express = require ('express');
const {foodInterface} = require('../models');
const router = express.Router();


router.post('/food', async (req, res, send) => {
  const newFood = await foodInterface.create(req.body);
  res.status(200).send(newFood);
});

router.get('/food', async (req,res,next) => {
  let food = await foodInterface.read();
  res.status(200).send(food);
});

router.get('/food/:id', async (req,res,next) => {
  let {id}=req.params;
  let food= await foodInterface.read(id);
  res.status(200).send(food);
});

router.put('/food/:id', async( req,res,next) => {
  let {id}=req.params;
  await foodInterface.update(req.body,id);

  let food=await foodInterface.read(id);
  res.status(200).send(food);
});

router.delete('./food/:id', async (req,res,next) => {
  let {id}=req.params;
  await foodInterface.destroy(id);
  res.status(200).send('Food Deleted');
});


module.exports = router;
