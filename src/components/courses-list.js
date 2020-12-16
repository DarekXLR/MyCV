const moveUp = document.querySelector('.courses-box .fa-angle-up');
const moveDown = document.querySelector('.courses-box .fa-angle-down');
const coursesList = document.querySelector('.courses-list');

let coursesPositionTop = 0;
let elementHeight = 0;
const handleMove = (movement) => {
  console.log('click')
  const angle = screen.orientation.angle;
  if (angle === 0) {
    if (movement === 'down') {
      if (coursesPositionTop > (-59 * 3)) {
        coursesPositionTop -= 59;
      } else if (coursesPositionTop === (-59 * 3)) {
        coursesPositionTop -= 37;
      }

    } else {
      if (coursesPositionTop === (-59 * 3 - 37)) {
        coursesPositionTop += 37;
      } else if (coursesPositionTop < 0) {
        coursesPositionTop += 59;
      }

    }
  } else {
    if (movement === 'down') {
      if (coursesPositionTop > (elementHeight)) {
        coursesPositionTop -= 37;
      }

    } else {
      if (coursesPositionTop < 0) {
        coursesPositionTop += 37;
      }

    }
  }
  coursesList.style.top = `${coursesPositionTop}px`
  console.log(coursesPositionTop)
  console.log(screen.orientation.angle)
};

const setHeight = () => {

  elementHeight = -37 * 4;
  const orientation = screen.orientation.angle;
  const width = screen.width;
  const height = screen.height;

  if ((orientation === 90 && 325 < height) && height < 411) {
    elementHeight = -37 * 3;
    console.log('x3')
  } else if (orientation === 90 && height > 410) {
    elementHeight = -37 * 2;
    console.log('x2')
  }
}

setHeight()
window.onresize = setHeight;

moveUp.addEventListener('click', () => handleMove('up'));
moveDown.addEventListener('click', () => handleMove('down'));
moveUp.addEventListener('touchend', () => handleMove('up'));
moveDown.addEventListener('touchend', () => handleMove('down'));
window.addEventListener("orientationchange", () => {
  coursesPositionTop = 0;
  coursesList.style.top = `${coursesPositionTop}px`
})