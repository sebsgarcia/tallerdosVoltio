const express = require('express');
const hbs = require('express-handlebars');
const app = express();


//instalar Mongo
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');



//Conection URL
const url = 'mongodb://localhost:27017';
const dbName = 'voltio';

//Create Clietn Object
const client = new MongoClient(url, { useNewUrlParser: true });


var db = null;



//connect 
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Conecto a la base de datos");

    //Conect to database
     db = client.db(dbName);

//    client.close();

});

//Definir la carpeta public
app.use(express.static('public'));
//para registrar el motor de render de handlebars
app.engine('handlebars', hbs());
//para setear el motor de render a utilizar
app.set('view engine', 'handlebars');

var shirts = require('./productos');

//app.use(express.static(path.join(__dirname, 'static')));
//definir ruta root o principal

app.get('/', function (request, response) {

    var contexto = {
        titulo: 'titulo',
        productos: shirts
    }

    response.render('home', contexto);
});

app.get('/woman', function (request, response) {

    var productos = db.collection('productos');
    productos.find({}).toArray(function (err, docs) {
        assert.equal(null, err);

         var contexto = {
             productos: docs
         
         };
         response.render('productoswoman', contexto);
    }); 

});

app.listen(3000, function () {
    console.log('Cargo');
});