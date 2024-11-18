let startBtn = document.querySelector(".lower__start");
let inputBox = document.querySelector(".lower__input");
let submitBtn = document.querySelector(".lower__submit");
let middleTxt = document.querySelector(".middle__main");
let lastTxt = document.querySelector(".last__main");
let i = 0;
const randomNum = function () {
  i = Math.floor(Math.random() * 9000 + 1000);
};

startBtn.addEventListener("click", () => {
  lastTxt.style.display = "none";
  randomNum();
  middleTxt.style.display = "block";
  middleTxt.innerHTML = i;
  setTimeout(() => {
    middleTxt.style.display = "none";
  }, 3000);
});

submitBtn.addEventListener("click", () => {
  if (i == inputBox.value && i !== 0) {
    lastTxt.style.display = "block";
  }
});
