const icon = document.querySelector('.scroll-icon')
const screenHight = window.innerHeight;

const handleScrollIcon = () => {
  const scroll = window.scrollY;
  if (scroll >= screenHight / 2) {
    icon.style.display = ('block')
  } else {
    icon.style.display = ('none')
  }

};

const returnToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', handleScrollIcon);
icon.addEventListener('click', returnToTop);
icon.addEventListener('touch', returnToTop);