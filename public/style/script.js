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


  var rango = document.querySelector('.input-rango');
  function buscarPorPrecio(){
    console.log(rango.value);
  }
  rango.addEventListener('input', buscarPorPrecio);