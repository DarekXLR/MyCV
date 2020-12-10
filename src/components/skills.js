const images = [...document.querySelectorAll('.skills img')];

let position = 0;
let elementHeight = 0;
const handleScroll = () => {
  const scrolledDistance = window.pageYOffset;
  if ((scrolledDistance >= position) || (elementHeight + position < screen.height + scrolledDistance)) {
    images.map(image => image.classList.add('animation'))
  }


};


const firstScroll = () => {

  window.removeEventListener('scroll', firstScroll);
  const skills = document.querySelector('.skills');
  position = skills.offsetTop;
  elementHeight = skills.offsetHeight;
  window.addEventListener('scroll', handleScroll)
};

window.addEventListener('scroll', firstScroll)