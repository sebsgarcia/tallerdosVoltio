
function paginaCargada() {


  var principal = document.getElementById('prin');
  var first = document.getElementById('first');
  var second = document.getElementById('second');
  var third = document.getElementById('third');

  function modFirst(){
    var newImage = this.getAttribute("src");
    principal.setAttribute("src", newImage );

  }
  function modSecond(){
    var newImage = this.getAttribute("src");
    principal.setAttribute("src", newImage );

  }
  function modThird(){
    var newImage = this.getAttribute("src");
    principal.setAttribute("src", newImage );

  }
  
  first.addEventListener('click', modFirst);
  second.addEventListener('click', modSecond);
  third.addEventListener('click', modThird);
  


}
window.addEventListener('load', paginaCargada);