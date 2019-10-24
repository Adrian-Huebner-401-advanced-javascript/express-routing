'use strict';

const express = require('express');

const router = express.Router();

router.get('/posts/:postId/:banana', (request, response) => {
  const { postId } = request.params;
  response.send(`you have requested post number ${postId}`);
});

router.get('/posts', (request, response) => {
  console.log(request.query);
  response.send(`Your search query is ${request.query.postId}`);
});

module.exports = router;