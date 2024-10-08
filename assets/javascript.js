

// Function URL
function url() {
  fbq("track", "Purchase");
  fbq("track", "SubmitApplication");
  location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
}
//end Function url


// User  Jquery
$(document).ready(function () {


  // Sticky header
  const FunVisible = () => {
    if (window.pageYOffset > 250) {
      $("header").addClass("is-sticky");
    } else {
      $("header").removeClass("is-sticky");
    }
  };
  window.addEventListener("scroll", FunVisible);

  // Swiper
  var swiper = new Swiper("#swiper1", {
    loop: "true",
    centeredSlides: false,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      100: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '#swiper-button-next1',
      prevEl: '#swiper-button-prev1',
    },
  });

  var swiper = new Swiper("#swiper2", {
    loop: "true",
    centeredSlides: false,
    autoplay: {
      delay: 2000,
    },
  });

  var swiper = new Swiper("#swiper3", {
    loop: "true",
    effect: "cards",
    grabCursor: true,
    autoplay: {
      delay: 3000,
    },



  });


  // Back to top
  const backtotop = `<button class="Btn-backtotop1 ">
          <svg  class="Btn cursor-pointer-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
  </button>`;
  $("#backtotop").html(backtotop);
  var btn = $(".Btn-backtotop1");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });



// Click menu mobile
  $("#menu-icon").on("click", function () {

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $('#mobile').addClass("hidden");
    }
    else {
      $(this).addClass("active");
      $('#mobile').removeClass("hidden");
    }
  });
  $(document).on("click", function (event) {
    if (!$(event.target).closest("#mobile").length && !$(event.target).closest("#menu-icon").length) {
      $('#mobile').addClass("hidden");
      $('#menu-icon').removeClass("active");
    }
  });
  
  function move(){
    $(".slide ul").animate({
      top: "-=35px"
    },
    function(){
      $(".slide ul li:first").appendTo('ul');
      $(".slide ul").css("top","");
    });
  }

  
  setInterval(function(){move();},1500);

  // Loading 
  $('#showloading').delay(500).queue(function (next) {
    $(this).addClass('hidden');
    next();
  });


});

