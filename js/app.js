window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scrollTop', `${document.documentElement.scrollTop}px`);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
});

const panelsinnapravlenia = document.querySelectorAll('.panel');

function togglePanel() {
  console.log('Panel clicked');
  const delay = 300;
  const isOpen = this.classList.contains('open');

  if (isOpen) {
    setTimeout(() => {
      this.classList.remove('open');
      this.classList.remove('active');
    }, delay);
  } else {
    setTimeout(() => {
      this.classList.add('open');
      this.classList.add('active');
    }, delay);
  }
}

panelsinnapravlenia.forEach(panel => panel.addEventListener('click', togglePanel));

// Params
var sliderSelector = '.swiper-container',
    options = {
      init: false,
      loop: true,
      speed:800,
      slidesPerView: 'auto', // or 'auto'
      spaceBetween: 30,
      centeredSlides: true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 80, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multiplier
        slideShadows: true, // Enables slides shadows
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      // Events
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        }
      }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();

const panels = document.querySelectorAll('.panel');

function togglePanel() {
  const delay = 300;
  let isOpen = this.classList.contains('open');

  if (isOpen) {
    this.classList.remove('active');
    setTimeout(() => this.classList.remove('open'), delay);
    return;
  }

  this.classList.add('open');
  setTimeout(() => this.classList.add('active'), delay);
}

panels.forEach(panel => panel.addEventListener('click', togglePanel));