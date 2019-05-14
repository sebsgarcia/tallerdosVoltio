/*
function expand() {
    $(".search").toggleClass("close");
    $(".input").toggleClass("square");
    if ($('.search').hasClass('close')) {
      $('input').focus();
    } else {
      $('input').blur();
    }
  }
  $('button').on('click', expand);
 */

function paginaCargada() {



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
      listaCarrito.innerHTML += `
      <img class="producto__image" src="${producto.image}" width="250px">
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
  



}

window.addEventListener('load', paginaCargada);