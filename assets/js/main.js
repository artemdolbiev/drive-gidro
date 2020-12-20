$(function(){


  $('.banner-section__slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: ' <button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="assets/images/arrow-left.svg" alt=""></button>',
    nextArrow: ' <button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="assets/images/arrow-right.svg" alt=""></button>',
  });

  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active')
  });

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="assets/images/arrow-black-left.svg" alt=""></button>',
    nextArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="assets/images/arrow-black-right.svg" alt=""></button>',
  });
});