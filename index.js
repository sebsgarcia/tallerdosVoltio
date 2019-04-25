const express = require('express');
const hbs = require('express-handlebars');
const app = express();

//Definir la carpeta public
app.use(express.static('public'));
//para registrar el motor de render de handlebars
app.engine('handlebars',hbs());
//para setear el motor de render a utilizar
app.set('view engine','handlebars');

var shirts  = require('./datos');
//definir ruta root o principal
app.get('/', function(request, response){

    var contexto = {
        titulo: 'titulo',
        productos: shirts
    }
    
    response.render('home', contexto);
});

app.listen(4000, function(){
    console.log('Cargo');
});