const cardProfileBtn = document.querySelector(".flip-card-front .details-front");
const cardDetailsBtn = document.querySelector(".flip-card-back .details-back");
const card = document.querySelector(".flip-card-inner");

let cardFlipped = false;
let rotation = 0;

function cardFlip() {
  if (!cardFlipped) {
    card.style.transform = `rotateY(${rotation + 180}deg)`;
  } else {
    card.style.transform = `rotateY(${rotation + 180}deg)`;
  }
  rotation += 180;
  cardFlipped = !cardFlipped;
}

cardDetailsBtn.addEventListener('click', cardFlip)
cardProfileBtn.addEventListener('click', cardFlip)
cardDetailsBtn.addEventListener('touchstart', cardFlip)
cardProfileBtn.addEventListener('touchstart', cardFlip)