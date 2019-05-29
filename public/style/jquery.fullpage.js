
;(function(global,$){
	
	'use strict';
	var Fullpage = (function(){
		function Fullpage (el,options) {
			this.$el = el;
			this.currIndex = 0;
			this.animating = false;
			this.init();

		}

		var utils = {
			throttle:function(callback,delayTime,maxTime){
				var timer = null;
				var prevTime = 0;

				return function(){
					var context = this;
					var argument = arguments;
					var currTime = Date.now();
					if(maxTime && currTime - prevTime >= maxTime){
						prevTime = currTime;
						callback.apply(context,argument);
					}else{
						if(timer) clearTimeout(timer);
						timer = setTimeout(function(){
							callback.apply(context,argument);
						},delayTime);
					}
				}
			}
		};

		Fullpage.prototype = {
			constructor:Fullpage,
			init:function(){
				this.initHTML();
				this.bindEvent();
			},
			initHTML:function(){
				this.$el.children().css({
					'height':'100vh',
					'transition':'all 0.7s',
					'-webkit-transition':'all 0.7s'
					
				});
			},
			bindEvent:function(){
				var that = this;
				var targetIndex,x0,y0,xDiff,yDiff,delta;

				$(window).on('wheel DOMMouseScroll',utils.throttle(function(){
					var e = arguments[0].originalEvent;
					delta = e.wheelDelta?e.wheelDelta:-e.detail;
					targetIndex = that.currIndex + (delta>0?-1:1);
					that.gotoTarget(targetIndex);
					console.log(targetIndex);



					var estado = document.getElementById("cambiarwoman");
					if(targetIndex === 2){
						estado.style.textDecoration=("line-through");
					} else{
						estado.style.textDecoration=("none");
					}
					var estado = document.getElementById("cambiarman");
					if(targetIndex === 3){
						estado.style.textDecoration=("line-through");
					} else{
						estado.style.textDecoration=("none");
					}
					var estado = document.getElementById("cambiarkids");
					if(targetIndex === 4){
						estado.style.textDecoration=("line-through");
					} else{
						estado.style.textDecoration=("none");
					}var estado = document.getElementById("cambiarsale");
					if(targetIndex === 5){
						estado.style.textDecoration=("line-through");
					} else{
						estado.style.textDecoration=("none");
					}



                var fondo = document.getElementById("cambiarfondo");
                if(targetIndex===0){
					fondo.style.background=("#FFFFFF");
					
				}
				if(targetIndex===1){
					fondo.style.background=("#F4F1EC");
					
				}
				if(targetIndex===2){
					fondo.style.background=("#ECF0D9");
				}
				if(targetIndex===3){
					fondo.style.background=("#FCF0DC");
				}
				if(targetIndex===4){
					fondo.style.background=("#F1E8F8");
				}
				if(targetIndex===5){
					fondo.style.background=("#FFE5E5");
				}


				var fondo2 = document.getElementById("cambiarfondo2");
                if(targetIndex===0){
					fondo2.style.background=("#FFFFFF");
					
				}
				if(targetIndex===1){
					fondo2.style.background=("#F4F1EC");
					TweenMax.from(".animate-fondo",1, {opacity:0, delay:1});
					
				}
				if(targetIndex===2){
					fondo2.style.background=("#ECF0D9");
					TweenMax.from(".animate-fondo",1, {opacity:0, delay:1});
				}
				if(targetIndex===3){
					fondo2.style.background=("#FCF0DC");
					TweenMax.from(".animate-fondo",1, {opacity:0, delay:1});
				}
				if(targetIndex===4){
					fondo2.style.background=("#F1E8F8");
					TweenMax.from(".animate-fondo",1, {opacity:0, delay:1});
				}
				if(targetIndex===5){
					fondo2.style.background=("#FFE5E5");
					TweenMax.from(".animate-fondo",1, {opacity:0, delay:1});
				}

				var fondo3 = document.getElementById("cambiarfondo3");
                if(targetIndex===0){
					fondo3.style.background=("#FFFFFF");
					
				}
				if(targetIndex===1){
					fondo3.style.background=("#F4F1EC");
					
				}
				if(targetIndex===2){
					fondo3.style.background=("#ECF0D9");
				}
				if(targetIndex===3){
					fondo3.style.background=("#FCF0DC");
				}
				if(targetIndex===4){
					fondo3.style.background=("#F1E8F8");
				}
				if(targetIndex===5){
					fondo3.style.background=("#FFE5E5");
				}









				},100));

				this.$el.on('touchstart',function(e){     
					x0 = e.touches[0].clientX;
					y0 = e.touches[0].clientY;
				});

				this.$el.on('touchmove',utils.throttle(function(){
					console.log('move')
					var e = arguments[0];
					if (!x0 || !y0) return;
					xDiff = e.touches[0].clientX - x0;
					yDiff = e.touches[0].clientY - y0;

					targetIndex = that.currIndex + (yDiff>0?-1:1);
					that.gotoTarget(targetIndex);
				},16));
			},
			gotoTarget:function(targetIndex){
				var children = this.$el.children();
				var that = this;
				var translateY;

				if(this.animating || targetIndex<0 || targetIndex>this.$el.children().length-1) return;

				translateY= 'translateY(-'+targetIndex*100+'%)';
				this.animating = true;
				$(children[0]).on('transitionend', function callback() {
			        this.removeEventListener('transitionend', callback);
			        that.animating = false;
		        });
		        children.css({
					'transform':translateY,
					'-webkit-transform':translateY
				});	

				this.currIndex = targetIndex;
			}
		};

		return Fullpage;
	})();

	$.fn.fullpage = function(options){
		this.each(function(){
			new Fullpage($(this),options);
		});
		return this;
	};
})(this,this.jQuery);