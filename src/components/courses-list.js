const moveUp = document.querySelector('.courses-box .fa-angle-up');
const moveDown = document.querySelector('.courses-box .fa-angle-down');
const coursesList = document.querySelector('.courses-list');

let coursesPositionTop = 0;

const handleMove = (movement) => {
  console.log('click')
  if (movement === 'up') {
    if (coursesPositionTop > -80) {
      coursesPositionTop -= 37;
    }
    coursesList.style.top = `${coursesPositionTop}px`
  } else {
    if (coursesPositionTop < 0) {
      coursesPositionTop += 37;
    }
    coursesList.style.top = `${coursesPositionTop}px`
  }

};

moveUp.addEventListener('click', () => handleMove('up'));
moveDown.addEventListener('click', () => handleMove('down'));
moveUp.addEventListener('touchend', () => handleMove('up'));
moveDown.addEventListener('touchend', () => handleMove('down'));