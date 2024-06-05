const express  = require('express');
const jsonGraphqlExpress = require('json-graphql-server/node');
const data = require('./db.js');
const app = express();

app.use('/graphql', jsonGraphqlExpress.default(data));
app.listen(3333);

module.exports = app;