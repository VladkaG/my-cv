$(function(){
  
   $(".skill__per").each(function(){
     $this = $(this);
     var per = $(this).attr("per");
     $this.css("width", per + "%");
     $this.find(".value").text(per + "%").css("opacity", "1");
   });
   
 });


$('.filter__item').click(function(event) {
   var i = $(this).data('filter');
   if(i == 1){
      $('.portfolio__column').show();
   }else{
      $('.portfolio__column').hide();
      $('.portfolio__column.f_' + i).show();
   }
   $('.filter__item').removeClass('filter__item-active');
   $(this).addClass(' filter__item-active');
  
   return false;
});

$(document).ready(function(){
   $('.icon-menu').click(function(event){
    $('.icon-menu,.menu__items').toggleClass('active');
    $('.body').toggleClass('lock');
 });
 $('.menu__link a').click(function(event){
   $('.icon-menu,.menu__items').removeClass('active');
   $('.body').removeClass('lock');
});
 });


var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});
