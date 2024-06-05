const express  = require('express');
const jsonGraphqlExpress = require('json-graphql-server/node');
const data = require('./db.js');
const app = express();

app.use('/', jsonGraphqlExpress.default(data));

module.exports = app;