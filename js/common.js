$(document).ready(function(){
  jQuery(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var scroll_picca =jQuery('.screen6').offset().top;
    //если мы докрутили до нужного элемента 
    if (jQuery(this).scrollTop() > scroll_picca) {
      // создаем эффекты и анимацию
      $(".up").fadeIn(400);
      
    }else{
      $(".up").fadeOut(400);
      
    } 
});
$(".screen2").on("click","a",function(event){event.preventDefault();
    var id=$(this).attr('href'),top=$(id).offset().top;
    $('body,html').animate({scrollTop:top},1000);});
$("body").on("click",".up",function(event){event.preventDefault();
    var id=$(this).attr('href'),top=$(id).offset().top;
    $('body,html').animate({scrollTop:top},1000);});

	$('.popup-closer, .closer img').click(function(){
		$('.main-popup-wrapper').fadeOut(300);
	})
$('.leave').click(function(){
		$('.zayavka').fadeIn(300);
	})
$('.zakaz').click(function(){
		$('.call').fadeIn(300);
	})
$('.ut').click(function(){
		$('.cost').fadeIn(300);
	})
$('.pol').click(function(){
    $('.privat').fadeIn(300);
  })
})

$(document).ready(function(){
  var $owl = $('.mash');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  center: false,
  loop: true,
    autoplay:true,
autoplayTimeout:4000,
autoplayHoverPause:false,
    nav: true,
    pagination : true,
    responsiveClass:true,
    responsive:{
      300:{
            items:1,
        },

        993:{
            items:1,
        }
    }

});
$('.owl-prev').html('<img src="img/left.png">');
$('.owl-next').html('<img src="img/right.png">');
});
