const express = require('express');
const hbs = require('express-handlebars');
const app = express();


//instalar Mongo
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');



//Conection URL
const url = 'mongodb://localhost:27017';
//const url = 'mongodb+srv://cluster0-mggqy.mongodb.net/tienda';
const dbName = 'tienda';

//Create Clietn Object
const client = new MongoClient(url, { useNewUrlParser: true });


var db = null;

client.connect(function(err){
    assert.equal(null, err);
    db = client.db(dbName);

});


MongoClient.connect(`mongodb+srv://cluster0-mggqy.mongodb.net/tienda`,
{
    auth: {
        user: 'sebs_garcia',
        password: '!Kira971129'
    }
},

function(err, client){
    if(err) throw err;
    
    db = client.db('tienda');

    app.listen(process.env.POR || 1234);
}
    
);

/*

//connect 
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Conecto a la base de datos");

    //Conect to database
     db = client.db(dbName);

//    client.close();

});
*/
//Definir la carpeta public
app.use(express.static (__dirname +'/public'));
//para registrar el motor de render de handlebars
app.engine('handlebars', hbs());
//para setear el mortor de render a utilizar
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended:true}));
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

app.get('/cart', function (request, response) {

    response.render('carrito');
});

app.get('/tienda/:category?', function (request, response) {

   var query = {};

   if(request.query.category){
       query.category = request.query.category;
   }
   if(request.query.price){
       query.price = { $lt: parseInt( request.query.price) };
 
   }
   if(request.query.type){
    query.type = request.query.type;

}

console.log(query);
    const productos = db.collection('productos');
    productos.find(query).toArray(function (err, docs) {
        assert.equal(null, err);

         var contexto = {
             productos: docs,
             category: request.query.category,
             type: request.query.type,
             price: request.query.price,
             desc: request.query.desc,
             esMens: request.query.category == "mens",
             esWomens: request.query.category == "womens",
         
         };
         response.render('tienda', contexto);
    }); 

});

app.get('/tienda/producto/:name', function(request, response){

    var collection = db.collection('productos');
    collection.find({name : request.params.name })
    .toArray(function(err, docs){
        console.log(docs);
        var contexto = {
            producto: docs[0]
        };

        response.render('producto', contexto );

    });
});

app.post('/pago', function(request, response){

    console.log(request.body);


    var pedido = {
        name: request.body.name,
        document: request.body.document,
        address: request.body.address,
        email: request.body.email,

        productos: JSON.parse(request.body.productos),
        fecha: new Date(),
        estado: 'nuevo'

    };

   var collection = db.collection('pedidos');
   collection.insertOne(pedido, function(err){
       assert.equal(err, null);
       console.log('pedido guardado');

   });

});



app.listen(5000, function () {
    console.log('Cargo');
});