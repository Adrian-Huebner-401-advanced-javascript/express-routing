'use strict';

const express = require('express');
const productsRouter = express.Router();

const Products = require('../models/products-model');
const products = new Products();

// Routes for products
productsRouter.get('/api/v1/products', getProducts);
productsRouter.post('/api/v1/products', postProducts);
productsRouter.get('/api/v1/products/:id', getProduct);
productsRouter.put('/api/v1/products/:id', putProducts);
productsRouter.delete('/api/v1/products/:id', deleteProducts);

// Route Handler Functions for Products
function getProducts(request,response,next){
  products.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}

function getProduct(request,response,next){
  products.get(request.params.id)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function postProducts(request,response,next){
  products.post(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function putProducts(request,response,next){
  products.put(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function deleteProducts(request,response,next){
  products.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

module.exports = productsRouter;