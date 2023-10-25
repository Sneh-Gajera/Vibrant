// preloader

$(document).ready(function () {
  setTimeout(() => {
    $("#pre_loader").addClass("loaded");
  }, 2000);
  setTimeout(() => {
    $("#pre_loader").remove("loaded");
  }, 3000);
});

//responsive menu
$(document).ready(function () {
  $(".humburger i").click(function () {
    $(this).toggleClass("fa-times");
    $(".link_side").toggleClass("active");
  });
});





// sticky nav

window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navigate_bar");
  nav.classList.toggle("sticky", window.scrollY > 50);
});

new PureCounter({
  selector: ".purecounter",
  duration: 2,
  delay: 10,
  repeat: false,
  decimals: 0,
  legacy: true,
  filesizing: false,
  currency: false,
  separator: true,
});
//   hero

$(".hero_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// course

$(".course_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  // dots:false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// event

$(".event_slider").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".testimonial_slider").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  // dots:false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".brand").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

//review slider
$(".review_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
