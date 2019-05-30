
function paginaCargada() {

  AOS.init();

  var listaProductos = [];

  if(localStorage.getItem('listaProductos') != null){

   listaProductos = JSON.parse(localStorage.getItem('listaProductos')) ;
  }

  console.log(listaProductos.length);

  var carritoNum = document.querySelector('.carrito__num');
  var listaCarrito = document.querySelector('.carrito-desplegado__lista');

function actualizarCarrito(){

  if(carritoNum !=null){
  
    carritoNum.innerHTML = listaProductos.length;
  }

  if(listaCarrito != null){

  listaCarrito.innerHTML = '';
    listaProductos.forEach(function(producto, index){
      listaCarrito.innerHTML += `<div class="carrito__desplegado-item">
      <img class="producto__image" src="${producto.image}" width="150px">
      <p class="producto__name">${producto.name}</p>
      <p class="producto__price">${producto.price}</p>
      </div>
      `;
      
    }); 
  }
}
actualizarCarrito();

  var botones = document.querySelectorAll('.product__cart');
  function recorrerBotoner(boton) {

    function addToCart() {
      var padre = boton.parentNode;
      var name = padre.querySelector('.producto__name').innerText;
      var price = padre.querySelector('.producto__price').innerText;
      var image = padre.querySelector('.producto__image').src;
      var producto ={
        name : name, 
        price : price,
        image : image,

      };

      listaProductos.push(producto);
      carritoNum.innerHTML = listaProductos.length;
      localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

    }

    boton.addEventListener('click', addToCart);
  }
  botones.forEach(recorrerBotoner);


  var botonProductoDetalle = document.querySelector('.product-detail__cart');
    function agregarAlCarritoDetalle(){


      var name = document.querySelector('.producto__name').innerText;
      var price = document.querySelector('.producto__price').innerText;
      var image = document.querySelector('.producto__image').src;
      var producto ={
        name : name, 
        price : price,
        image : image,

      };

      listaProductos.push(producto);
      actualizarCarrito();
      localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

    }
    if(botonProductoDetalle != null){

      botonProductoDetalle.addEventListener('click', agregarAlCarritoDetalle);
    }



    //Taller 3
    TweenMax.set(".animate-nav",{autoAlpha:0});
    TweenMax.to(".animate-nav", 1, {
   //  x: 500,
   //  scale: .8,
    //  ease: Elastic.easeOut,
      autoAlpha:1,
      delay:1
    });

    /*
TweenMax.from(".animate-nav",1, {opacity:0, delay:1});


*/






  
}

window.addEventListener('load', paginaCargada);