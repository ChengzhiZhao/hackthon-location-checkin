// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const path           = require("path");

const port = 8000;
app.use(bodyParser.json());

require('./app/routes')(app, {});
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index2.html'));
    //__dirname : It will resolve to your project folder.
  });
app.listen(port, () => {
  console.log('We are live on ' + port);
});