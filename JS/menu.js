const hamburger = document.querySelector('#menu-mobile');
const menuLinks = document.querySelector('.nav-list');
const logoClass = document.querySelector('.name_logo')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  logoClass.classList.toggle('closeLogo')
  
});

const portfolio = document.querySelector('.portfolio-link');
const aboutUs = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');

const close = () => {
  hamburger.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

portfolio.addEventListener('click', () => {
  close();
});

aboutUs.addEventListener('click', () => {
  close();
});

contactLink.addEventListener('click', () => {
  close();
});
