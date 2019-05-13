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

  var botones = document.querySelectorAll('.product__cart');
  function recorrerBotoner(boton) {

    function addToCart() {
      var padre = boton.parentNode;
      var nombre = padre.querySelector('.producto__nombre').innerText;


      localStorage.setItem('producto', nombre);

    }

    boton.addEventListener('click', addToCart);
  }
  botones.forEach(recorrerBotoner);






}

window.addEventListener('load', paginaCargada);