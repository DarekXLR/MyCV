const pl = [...document.querySelectorAll(".pl")];
const en = [...document.querySelectorAll(".en")];
const btnPl = document.querySelector(".polish");
const btnEn = document.querySelector(".english");
const languageChoice = document.querySelector(".greeting");
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector("header");


function polish() {
    wrapper.style.display = "grid";
    languageChoice.style.display = "none";
    en.forEach(info => {
        info.style.display = "none";
    })
   header.className = 'pl';

}

function english() {
   
    wrapper.style.display = "grid";
    languageChoice.style.display = "none";
    pl.forEach(info => {
        info.style.display = "none";
    })
    header.className = 'en';
    
}

btnPl.addEventListener('click', polish);
btnEn.addEventListener('click', english);



