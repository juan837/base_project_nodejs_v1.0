var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlencode = bodyParser.urlencoded({extended: false});

//Variables
var descripciones = {
    'Direccion': 'Camino para llegar donde vive',
    'Casa'     : 'Sitio o espacio donde vive',
    'Vereda'   : 'Grupo de caserios'
};

router.route('/')
    .get(function(req, res){
        //var blocks = ['Direccion', 'Casa', 'Vereda'];
        res.json(Object.keys(descripciones));
    })
    .post(parseUrlencode, function(req, resp){
        var newBlock = req.body;
        descripciones[newBlock.name] = newBlock.description;
        resp.status(201).json(newBlock.name);
    });


//middleware all
//de esta manera se hace una limpiesa de las cadenas a un formato especifico
router.route('/:name')
    .all(function(request, reponse, next){
        var nombre = request.params.name;
        request.varNombre = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
        next();
    })
    .get(function(req, res){
        var descripcion = descripciones[req.varNombre];
        res.json(descripcion);
    })
    .delete(function(req, resp){
        delete descripciones[req.varNombre];
        resp.sendStatus(200);
    });

module.exports = router;