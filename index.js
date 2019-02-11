
$(document).ready(function(){

	$("#bg Travis").fadeTo(1000, 0.4, () => {
		$("#fancyNav").fadeIn(4000);
		$("#bgShadow").fadeIn(4500);
		$("#bg Travis").fadeTo(2000, 1);
		$("#skills").animate({ marginTop: "-1vh"},6500, () => {

			// $(".html .cir, .java .cir, .py .cir, .ruby .cir, .js .cir, .ps .cir, .ui .cir, .hw .cir, .c .cir, .cc .cir").css(
			// 	"animation","progress 3s ease-in-out forwards"
			// );
		});
	});


//	SKILLS 	\\
{

	$(".html, .html .popUp").mouseenter(function(){
	    // console.log('Show!');
	    var pos = $('.html').position();
	    	$('.html .popUp').css('display', 'inline-block');
	    	$('.html .popUp').css('top', pos.top,  'left', pos.left);
	    	$(".html .cir").css("animation","progress 3s ease-in-out forwards");
	}).mouseleave(function(){
	    // console.log('Hide!');
	    	$('.html .popUp').css('display', 'none');
	    	$(".html .cir").delay( 3000 ).queue(function (next) { 
										   $(this).css("animation","none"); 
										   next(); 
										 });
	    	// .css("animation","none");
	});


	$(".ruby, .ruby .popUp").mouseenter(function(){
	    // console.log('Show!');
	    var pos = $('.ruby').position();
	    	$('.ruby .popUp').css('display', 'inline-block');
	    	$('.ruby .popUp').css('top', pos.top,  'left', pos.left);
	    	$(".ruby .cir").css("animation","progress 3s ease-in-out forwards");
	}).mouseleave(function(){
	    // console.log('Hide!');
    	$('.ruby .popUp').css('display', 'none');
    	$(".ruby .cir").delay( 3000 ).queue(function (next) { 
									   $(this).css("animation","none"); 
									   next(); 
									 });
	});


	$(".js, .js .popUp").mouseenter(function(){
	    // console.log('Show!');
	    var pos = $('.js').position();
	    	$('.js .popUp').css('display', 'inline-block');
	    	$('.js .popUp').css('top', pos.top,  'left', pos.left);
	    	$(".js .cir").css("animation","progress 3s ease-in-out forwards");
	}).mouseleave(function(){
	    // console.log('Hide!');
    	$('.js .popUp').css('display', 'none');
    	$(".js .cir").delay( 3000 ).queue(function (next) { 
									   $(this).css("animation","none"); 
									   next(); 
									 });
	});


	$(".java, .java .popUp").mouseenter(function(){
	    // console.log('Show!');
	    var pos = $('.java').position();
	    	$('.java .popUp').css('display', 'inline-block');
	    	$('.java .popUp').css('top', pos.top,  'left', pos.left);
	    	$(".java .cir").css("animation","progress 3s ease-in-out forwards");
	}).mouseleave(function(){
	    // console.log('Hide!');
    	$('.java .popUp').css('display', 'none');
    	$(".java .cir").delay( 3000 ).queue(function (next) { 
									   $(this).css("animation","none"); 
									   next(); 
									 });
	});


	$(".py, .py .popUp").mouseenter(function(){
	    // console.log('Show!');
	    var pos = $('.py').position();
	    	$('.py .popUp').css('display', 'inline-block');
	    	$('.py .popUp').css('top', pos.top,  'left', pos.left);
	    	$(".py .cir").css("animation","progress 3s ease-in-out forwards");
	}).mouseleave(function(){
	    // console.log('Hide!');
	    $('.py .popUp').css('display', 'none');
	    $(".py .cir").delay( 3000 ).queue(function (next) { 
									   $(this).css("animation","none"); 
									   next(); 
									 });
	});


	$(".ps, .ps .popUp").mouseenter(function(){
	    // console.log('Show!');
	    var pos = $('.ps').position();
	    	$('.ps .popUp').css('display', 'inline-block');
	    	$('.ps .popUp').css('top', pos.top,  'left', pos.left);
	    	$(".ps .cir").css("animation","progress 3s ease-in-out forwards");
	}).mouseleave(function(){
	    // console.log('Hide!');
    	$('.ps .popUp').css('display', 'none');
    	$(".ps .cir").delay( 3000 ).queue(function (next) { 
									$(this).css("animation","none"); 
									  next(); 
									});
	});


	$(".ui, .ui .popUp").mouseenter(function(){
	    // console.log('Show!');
	    var pos = $('.ui').position();
	    	$('.ui .popUp').css('display', 'inline-block');
	    	$('.ui .popUp').css('top', pos.top,  'left', pos.left);
	    	$(".ui .cir").css("animation","progress 3s ease-in-out forwards");
	}).mouseleave(function(){
	    // console.log('Hide!');
    	$('.ui .popUp').css('display', 'none');
    	$(".ui .cir").delay( 3000 ).queue(function (next) { 
									$(this).css("animation","none"); 
									  next(); 
									});
	});


	$(".hw, .hw .popUp").mouseenter(function(){
	    // console.log('Show!');
	    var pos = $('.hw').position();
	    	$('.hw .popUp').css('display', 'inline-block');
	    	$('.hw .popUp').css('top', pos.top,  'left', pos.left);
	    	$(".hw .cir").css("animation","progress 3s ease-in-out forwards");
	}).mouseleave(function(){
	    // console.log('Hide!');
    	$('.hw .popUp').css('display', 'none');
    	$(".hw .cir").delay( 3000 ).queue(function (next) { 
									$(this).css("animation","none"); 
									  next(); 
									});
	});


	$(".c, .c .popUp").mouseenter(function(){
	    // console.log('Show!');
	    var pos = $('.c').position();
	    	$('.c .popUp').css('display', 'inline-block');
	    	$('.c .popUp').css('top', pos.top,  'left', pos.left);
	    	$(".c .cir").css("animation","progress 3s ease-in-out forwards");
	}).mouseleave(function(){
	    // console.log('Hide!');
    	$('.c .popUp').css('display', 'none');
    	$(".c .cir").delay( 3000 ).queue(function (next) { 
									$(this).css("animation","none"); 
									  next(); 
									});
	});


	$(".cc, .cc .popUp").mouseenter(function(){
	    // console.log('Show!');
	    var pos = $('.cc').position();
	    	$('.cc .popUp').css('display', 'inline-block');
	    	$('.cc .popUp').css('top', pos.top,  'left', pos.left);
	    	$(".cc .cir").css("animation","progress 3s ease-in-out forwards");
	}).mouseleave(function(){
	    // console.log('Hide!');
	    $('.cc .popUp').css('display', 'none');
	    $(".cc .cir").delay( 3000 ).queue(function (next) { 
									$(this).css("animation","none"); 
									  next(); 
									});
	});	
}//skills

$("#skills button").mouseenter(() => {
		hue = 0;
		button = setInterval(function() {
			$("#skills button:hover").css( "box-shadow", "0 0 1vw hsl("+hue+", 100%, 50%)");
			hue++;
			if(hue > 350){hue = 0;}
		},25);
	}).mouseleave(() => {
		clearInterval(button);
		$("#skills button").css( "box-shadow", "0 0 1vw black");
	});
});

