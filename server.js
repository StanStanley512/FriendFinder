const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/api+json"}));

app.use(express.static('./app/public'));

require('./app/routing/htmlRoutes')(app)
require('./app/routing/apiRouting')(app)

app.listen(port, function () {
  console.log(`listening on ${port}`)
})