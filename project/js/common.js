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


});

