let Menubtn = document.querySelector("#Menubtn")
let Navbar = document.querySelector("header .navbar");

window.onscroll = () => {
    Navbar.classList.remove("active");
    Menubtn.classList.remove("fa-times");
};



Menubtn.onclick = () => {
    Menubtn.classList.toggle("fa-times");
    Navbar.classList.toggle("active");
};


// Swiper.js
var swiper = new Swiper(".ReviewSlider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
     slidesPerView: 2
    },
    1050: {
     slidesPerView:3    
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
+