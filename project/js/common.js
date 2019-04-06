$(document).ready(function() {

  // Scroll to block
  $(".navigation-item").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top - 15
    }, 1000);
  });

  $('.language-item a').on('click', function(){
    $('.language-item a').removeClass('current');
    $(this).addClass('current');
  });

  $('.navigation-item a').on('click', function () {
    $('.navigation-item a').removeClass('current');
    $(this).addClass('current');
  });

  $('.navigation-btn').on('click', function(){
    $(this).toggleClass('active');
    $('.navigation-list').toggleClass('show');
  });

  if ($(window).width() <= 768) {
    $('.navigation-list').removeClass('show');
  }

  $('.work-link').on('click', function(e) {
    e.preventDefault();
    var k = $(this).data('target');
    $('#' + k + '').addClass('opened');
  });
  
  $('.close-btn').on('click', function(e){
    e.preventDefault();    
    $('.work-full').removeClass('opened');
  });
  $('.close-btn').on('hover', function(e){
    e.preventDefault();    
    $(this).addClass('clicked');
  });

  $('select').niceSelect();


  $('.filter-link').on('click', function(e){
    e.preventDefault();
    let workClass = $('.work-item');
    let showClass = $(this).data('target');
    let k = $("." + showClass + "");
    workClass.removeClass('show');
    workClass.addClass('hide');
    k.addClass('show');
  }); 

 new TypeIt('.main-text', {
     speed: 50,
     startDelay: 900
   })
   .type("Hello, <br> I'm <span class='main-span'>Alexey Rybalko</span> <br> Website Portfolio")
   .go();

  VANTA.NET({
    el: "#header",
    color: 0xff0000,
    backgroundColor: 0x0,
    points: 14.00,
    maxDistance: 16.00,
    spacing: 5.00
  })

});

// CUBE

// var cube = new Cube({
//   cubeWrapperSelector: '.CubeWrapper',
//   cubeSelector: '.Cube',
//   frontSideClass: 'Cube-side--front',
//   secondSideClass: 'Cube-side--second',
//   transitionTime: 300
// });

