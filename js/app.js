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


