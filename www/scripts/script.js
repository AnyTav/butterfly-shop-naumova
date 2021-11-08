$(document).ready(function(){

  $('.js-burger').on('click', function(){

    $('.js-main-nav').toggleClass('main-nav-open');

  });

  // Аккордион

  let prevBtn;

  $('.js-accordion-btn').on('click', function() {
    $(this).toggleClass('active');

    if (prevBtn === $(this)[0]) {
      $(this).next().slideToggle();
      return;
    }

    $('.js-accordion-btn').next().slideUp();
    $(this).next().slideDown();
    prevBtn = $(this)[0];

  });

  // Табы
  $('.tabs-link').on('click', function(e) {
    e.preventDefault();

    let index = $(this).index('.tabs-link');
    $('.tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.contacts-content').removeClass('active');
    $('.contacts-content').eq(index).addClass('active');

  });

  // Фильтр
  $('.filter-link').on('click', function(event) {
    event.preventDefault();

    let linkType = $(this).data('type');
    console.log(linkType);

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (linkType === 'all') {
      $('.portfolio-pic-wrap').show();
      return;
    }

    $('.portfolio-pic-wrap').each(function(){
      let itemType = $(this).data('type');

      if (linkType === itemType) {
        $(this).show();
        return;
      }

      $(this).hide();
    });

  });

  // Слайдер
  $('.js-slider-wrap').slick();

});
