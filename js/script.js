$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});

// スワイパー
const swiper = new Swiper(".mv-swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});

// アコーディオン
$(function() {
  $('.js-accordion .faq__question').on('click', function() {
    $(this)
      .toggleClass('is-open')
      .next('.faq__answer')
      .slideToggle(300)
      .parent('.faq__item')
      .toggleClass('is-open');
  });
});
