var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);



//opciones de configuracion
app.set('view engine', 'jade');
app.set('views','./public');



//middleware refiere public como accesible en all
// el proyecto
app.use(express.static('public'));


// es como si nesteara la las rutas del archivos blocks.js
// en la ruta /blocks
var blocks = require('./routes/blocks');
app.use('/blocks', blocks);

//GETS
app.get('/', function(req, res){
    res.render('index');
});

app.listen(8080, function(){
    console.log('server started \n');

});