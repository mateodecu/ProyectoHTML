var express = require('express');
var app = express();
// const path = require('C:\\Users\\Mateo\\Desktop\\Proyecto HTML');
const router = express.Router();

app.use(express.static('C:\\Users\\Mateo\\Desktop\\Proyecto HTML'));

app.get('/', inicio);

function inicio (req, res) {
    res.sendFile('C:\\Users\\Mateo\\Desktop\\Proyecto HTML\\index.html');
  }


  app.use('/', router);
app.listen(process.env.port || 3000);