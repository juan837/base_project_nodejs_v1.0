var express = require('express');
var app = express();

//opciones de configuracion
app.set('view engine', 'jade');
app.set('views','./public');

//middleware refiere public como accesible en all
// el proyecto
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(8080, function(){
    console.log('server started');
});