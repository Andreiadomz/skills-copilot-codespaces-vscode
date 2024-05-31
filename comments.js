// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

// Comments
let comments = [
    {
        id: 1,