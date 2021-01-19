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

  distanceValue = 0
  const orientation = screen.orientation.angle;
  const width = screen.width;

  if (orientation === 0 && width < 361) {
    distanceValue = -480;
  } else if (orientation === 90 && width < 641) {
    distanceValue = -720;
  } else {
    distanceValue = -720;
  }
}

setDistance()
window.addEventListener("orientationchange", setDistance);




const handleColorChange = (degree) => {
  btns.map(btn => btn.classList.remove('color'));
  switch (degree) {
    case 72:
      btns[0].classList.add('color');
      break;
    case 36:
      btns[1].classList.add('color')
      break;
    case 0:
      btns[2].classList.add('color')
      break;
    case -36:
      btns[3].classList.add('color')
      break;
    case -72:
      btns[4].classList.add('color')
      break;
    case -108:
      btns[5].classList.add('color')
      break;
  }
};

const handleBtnClick = (index) => {
  switch (index) {
    case 0:
      change = 72
      break;
    case 1:
      change = 36
      break;
    case 2:
      change = 0
      break;
    case 3:
      change = -36
      break;
    case 4:
      change = -72
      break;
    case 5:
      change = -108
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

  if (change > 90) {
    change = 90
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
  if (change < -90) {
    change = -108
  } else if (-91 < change && change < -60) {
    change = -72
  } else if (-61 < change && change < -25) {
    change = -36
  } else if (-26 < change && change < 26) {
    change = 0
  } else if (61 > change && change > 25) {
    change = 36
  } else if (change > 60) {
    change = 72
  }
  handleColorChange(change);
  slider.style.transform = (`translateZ(${distanceValue}px)  scale(1) rotateY(${change}deg)`)
  window.removeEventListener('mousemove', handleMove);
  window.removeEventListener('mouseup', handleRelease);

};

const handleTouchMove = (event) => {
  const x = event.changedTouches[0].clientX || event.touches[0].pageX;
  const y = event.changedTouches[0].clientY || event.touches[0].pageY;
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

  move = Number(((x - currentX) / 8).toFixed(0));
  change += move;
  if (move !== 0) {
    startPositionX = x;
  }
  change += move;
  if (change > 90) {
    change = 90
  } else if (change < -120) {
    change = -120
  };
  currentX = x;
  slider.style.transform = (` translateZ(${distanceValue}px)  scale(0.8) rotateY(${change}deg)`)
}
const handleTouchSwipe = (event) => {
  startPositionX = event.changedTouches[0].clientX || event.touches[0].pageX;
  startPositionY = event.changedTouches[0].clientY || event.touches[0].pageY;
  currentX = event.changedTouches[0].clientX || event.touches[0].pageX;
  const skills = document.querySelector('.skills');
  position = skills.offsetTop;
  event.preventDefault();
  window.addEventListener('touchend', handleTouchRelease);
  window.addEventListener('touchmove', handleTouchMove);
};

const handleTouchRelease = (event) => {
  event.preventDefault();
  if (change < -90) {
    change = -108
  } else if (-91 < change && change < -60) {
    change = -72
  } else if (-61 < change && change < -25) {
    change = -36
  } else if (-26 < change && change < 26) {
    change = 0
  } else if (61 > change && change > 25) {
    change = 36
  } else if (change > 60) {
    change = 72
  }
  handleColorChange(change);
  slider.style.transform = (`translateZ(${distanceValue}px)  scale(1) rotateY(${change}deg)`)
  window.removeEventListener('touchmove', handleTouchMove);
  window.removeEventListener('touchend', handleTouchRelease);

};
article.addEventListener('mousedown', handleSwipe)
article.addEventListener('touchstart', handleTouchSwipe)