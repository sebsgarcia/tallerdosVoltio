function paginaCargada() {
    AOS.init();



    TweenMax.set(".animate-nav",{autoAlpha:0});
    TweenMax.to(".animate-nav", 1, {
   //  x: 500,
   //  scale: .8,
    //  ease: Elastic.easeOut,
      autoAlpha:1,
      delay:1
    });

    TweenMax.set(".animate-nav2",{autoAlpha:0});
    TweenMax.to(".animate-nav2", 1, {
   //  x: 500,
   //  scale: .8,
    //  ease: Elastic.easeOut,
      autoAlpha:1,
      //delay:1
    });
}

window.addEventListener('load', paginaCargada);