var express = require('express')
    ,app = express()
    ,routes = require('../app/routes')
    ,path = require('path')
    ,bodyParser = require('body-parser');

/*
app.set('clientePath', path.join(_dirname, '../..','client'));
console.log(app.get('clientPath));
app.use(express.static(app.get('clientPath')));
*/

app.use(bodyParse.json());

app.use(function(req, res, next){
    res.header("Acess-Control-Allow-Origin", "*")
    res.header("Acess-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept")
    next()
})

routes(app);

module.exports = app;
