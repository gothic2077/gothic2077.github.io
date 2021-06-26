$(document).ready(function() {
  $("a.expirience").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

 $("a.javaskript-skill").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

 $("a.bio").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// Обновите текущее значение ползунка (при каждом перетаскивании маркера ползунка)
slider.oninput = function() {
  output.innerHTML = this.value;
} 


$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(this).toggleClass("active");
    $('ul.menu').slideToggle(500, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});