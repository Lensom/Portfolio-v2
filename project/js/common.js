$(document).ready(function() {

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


  

});


