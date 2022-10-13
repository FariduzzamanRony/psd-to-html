$(function(){
$('.gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
     dots:true,
      prevArrow:'.left',
    nextArrow:'.right',
    autoplaySpeed: 2000,
});
    
 $(window).on('scroll',function(){
var scrolling = $(this).scrollTop();
if(scrolling > 100){
    $('.navbar').addClass('bg');
}
else{
    $('.navbar').removeClass('bg');
}    
    
});   
       

});