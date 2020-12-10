const article = document.querySelector('.profile');
const slider = document.querySelector('.slider');
const btns = [...document.querySelectorAll('.menu li')];

let position = 0;
let currentX = 0;
let startPositionX = 0;
let startPositionY = 0;
let move = 0;
let change = 0;

let distanceValue = 0;

const setDistance = () => {

  distanceValue = 20
  const orientation = screen.orientation.angle;
  const width = screen.width;

  if (orientation === 0 && width < 361) {
    distanceValue = -386;
  } else if (orientation === 90 && width < 641) {
    distanceValue = -560;
  } else {
    distanceValue = -560;
  }
}

setDistance()
window.addEventListener("orientationchange", setDistance);




const handleColorChange = (degree) => {
  btns.map(btn => btn.classList.remove('color'));
  switch (degree) {
    case 90:
      btns[0].classList.add('color');
      break;
    case 45:
      btns[1].classList.add('color')
      break;
    case 0:
      btns[2].classList.add('color')
      break;
    case -45:
      btns[3].classList.add('color')
      break;
    case -90:
      btns[4].classList.add('color')
      break;
  }
};

const handleBtnClick = (index) => {
  switch (index) {
    case 0:
      change = 90
      break;
    case 1:
      change = 45
      break;
    case 2:
      change = 0
      break;
    case 3:
      change = -45
      break;
    case 4:
      change = -90
      break;
  }
  handleColorChange(change);
  slider.style.transform = (` translateZ(${distanceValue}px) scale(1) rotateY(${change}deg)`)

}
btns.map((btn, index) => {
  btn.addEventListener('click', () => handleBtnClick(index))
  btn.addEventListener('touchend', () => handleBtnClick(index))
})



const handleMove = (event) => {
  const x = event.clientX;
  move = Number(((x - startPositionX) / 10).toFixed(0));

  change += move;
  if (move !== 0) {
    startPositionX = x;
  }

  if (change > 120) {
    change = 120
  } else if (change < -120) {
    change = -120
  };
  currentX = x;
  slider.style.transform = (` translateZ(${distanceValue}px)  scale(0.8) rotateY(${change}deg)`)
}
const handleSwipe = (event) => {
  startPositionX = event.clientX;
  currentX = event.clientX;
  event.preventDefault();
  window.addEventListener('mouseup', handleRelease);
  window.addEventListener('mousemove', handleMove);
};

const handleRelease = (event) => {
  event.preventDefault();
  // slider.style.transform = ('scale(1)')
  if (change < -60) {
    change = -90
  } else if (-61 < change && change < -30) {
    change = -45

  } else if (-31 < change && change < 31) {
    change = 0
  } else if (61 > change && change > 30) {
    change = 45
  } else if (change > 60) {
    change = 90
  }
  handleColorChange(change);
  slider.style.transform = (`translateZ(${distanceValue}px)  scale(1) rotateY(${change}deg)`)
  window.removeEventListener('mousemove', handleMove);
  window.removeEventListener('mouseup', handleRelease);

};

const handleTouchMove = (event) => {
  const x = event.changedTouches[0].clientX;
  const y = event.changedTouches[0].clientY;
  const ySwipe = startPositionY - y;
  if (ySwipe > 50) {

    window.scroll({
      top: position,
      left: x,
      behavior: 'smooth'
    });

  } else if (ySwipe < -50) {

    window.scroll({
      top: 0,
      left: x,
      behavior: 'smooth'
    });

  }

  move = Number(((x - currentX) / 10).toFixed(0));
  change += move;
  if (move !== 0) {
    startPositionX = x;
  }
  change += move;
  if (change > 120) {
    change = 120
  } else if (change < -120) {
    change = -120
  };
  currentX = x;
  slider.style.transform = (` translateZ(${distanceValue}px)  scale(0.8) rotateY(${change}deg)`)
}
const handleTouchSwipe = (event) => {
  startPositionX = event.changedTouches[0].clientX;
  startPositionY = event.changedTouches[0].clientY;
  currentX = event.changedTouches[0].clientX;
  const skills = document.querySelector('.skills');
  position = skills.offsetTop;
  event.preventDefault();
  window.addEventListener('touchend', handleTouchRelease);
  window.addEventListener('touchmove', handleTouchMove);
};

const handleTouchRelease = (event) => {
  event.preventDefault();
  if (change < -60) {
    change = -90
  } else if (-61 < change && change < -30) {
    change = -45
  } else if (-31 < change && change < 31) {
    change = 0
  } else if (61 > change && change > 30) {
    change = 45
  } else if (change > 60) {
    change = 90
  }
  handleColorChange(change);
  slider.style.transform = (`translateZ(${distanceValue}px)  scale(1) rotateY(${change}deg)`)
  window.removeEventListener('touchmove', handleTouchMove);
  window.removeEventListener('touchend', handleTouchRelease);

};
article.addEventListener('mousedown', handleSwipe)
article.addEventListener('touchstart', handleTouchSwipe)