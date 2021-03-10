$(function () {
    TweenMax.staggerFrom($('.animation-banner-text'),3,{top:100,opacity:0},0.5)
    $('.tdbox').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('xanh');//thêm class xanh vào html
		$(this).next().slideToggle(800);
    });
    $('.list-services').slideUp()
    $(".a").click(function(){
      $(".a.turn-right").removeClass("turn-right");
       $(this).addClass('turn-right');
   });

   $('.information-customer').click(function(event){
     $('.service').addClass('show-service')
   })
   $('.close-box').click(function(event){
    $('.service').removeClass('show-service')
   })
   setInterval(function(){
    $('.service').removeClass('show-service')
   },10000)

});
