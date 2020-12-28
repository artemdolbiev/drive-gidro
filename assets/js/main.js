$(function(){

  // Клик hamburger menu header
  $('.menu__btn').on('click', function(){
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  // Клик информации в footer
  $('.footer__topdrop').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('footer__topdrop--active');
  });

  // Слайдер баннер
  $('.banner-section__slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: ' <button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="assets/images/arrow-left.svg" alt=""></button>',
    nextArrow: ' <button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="assets/images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  // Переключение табов
  $('.tab').on('click', function(e){
    e.preventDefault();

    // Таб с дополнительным контейнером
    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper--no-scroll').siblings().find('div')).removeClass('tabs-content--active');

    // Таб без дополнительного контейнера
    // $($(this).siblings()).removeClass('tab--active');
    // $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    //Инициализация табов для слайдеров
    $('.product-slider').slick('setPosition');
  });

  // Клик сердечко, изменение цвета
  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active')
  });

  // Слайдер продуктов
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="assets/images/arrow-black-left.svg" alt=""></button>',
    nextArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="assets/images/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });

  // Переключение фильтра в каталоге
  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('200');
  });

  // Диапазон цены
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });

  // Блочный фильтр
  $('.catalog__filter-btngrid').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  // Линейный фильтр
  $('.catalog__filter-btnline').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

  // Звездный рейтенг
  $('.rate-yo').rateYo({
    ratedFill: "#1c62cd",
    normalFill: "#c4c4c4",
    spacing   : "7px",
  });

  // Клик кнопки фильтр при 992ox
  $('.aside__btn').on('click', function(){
    $(this).next().slideToggle();
  })


});