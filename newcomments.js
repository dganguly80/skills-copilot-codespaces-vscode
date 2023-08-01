// create web server
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var { randomBytes } = require('crypto');
var cors = require('cors');   // Cross Origin Resource Sharing
var axios = require('axios');
var app = express();
var port = process.env.PORT || 4001;
var commentsByPostId = {};
// app.use(bodyParser.json());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));