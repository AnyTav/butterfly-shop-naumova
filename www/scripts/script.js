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






  $('.js-btn-catalog').on('click', function() {

    let button = $(this);
    button.text('...');

    $.ajax({
      type: 'POST',
      url: '../json/catalog.json',
      data: 'count=4',
      success: function(response){
        let html = createHtml(response);
        addToHtml(html);
        button.text('Больше бабочек');
      },
      error: function(){}
    });

    function addToHtml(string) {
      $('.js-portfolio-wrap').append(string);
    }

    function createHtml(data) {
      let dataArray = data.portfolio;
      let htmlString = '';

      dataArray.forEach(function(item){
        htmlString = htmlString + `<div class="portfolio-pic-wrap" data-type="strict">
        <div class="pic-wrap">
          <img src="${item.imageUrl}" alt="${item.imageAlt}" class="portfolio-pic">
          <p class="portfolio-pic-text ">${item.text}</p>
        </div>
      </div>`;
      });

      return htmlString;
    }

  });

});
