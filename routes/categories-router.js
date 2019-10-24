'use strict';

const express = require('express');
const categoryRouter = express.Router();

const Categories = require('../models/categories-model');
const categories = new Categories();

// Routes that are needed for categories

categoryRouter.get('/api/v1/categories', getCategories);
categoryRouter.post('/api/v1/categories', postCategories);
categoryRouter.get('/api/v1/categories/:id', getCategory);
categoryRouter.put('/api/v1/categories/:id', putCategories);
categoryRouter.delete('/api/v1/categories/:id', deleteCategories);

// Route Handler Functions for categories

function getCategories(request,response,next){
  categories.get()
    .then (data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}

function getCategory(request,response,next){
  categories.get(request.params.id)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function postCategories(request,response,next){
  categories.post(request.body)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function putCategories(request,response,next){
  categories.put(request.params.id, request.body)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function deleteCategories(request,response,next){
  categories.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

module.exports = categoryRouter;