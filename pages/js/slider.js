import { cards } from "./list.js";
import { source } from "./audio.js";
import { audio } from "./audio.js";
import { imgOnpage } from "./audio.js";
import { randomNumArray } from "./utility.js";
import { randomFun } from "./utility.js";
import { ElementBuilder } from "./utility.js";
let prizes = document.querySelector(".trueFalse");
let audioGame = document.querySelectorAll(".audioGame");
let flipCardFrontImgs = document.querySelectorAll(".flip-card");
flipCardFrontImgs = Array.from(flipCardFrontImgs);
audioGame = Array.from(audioGame);
const playBtn = document.querySelector(".play");
const sliderBtn = document.querySelector(".slider");
window.onload = function flipcards() {
  const flipCards = document.querySelectorAll(".cards");
  const text = document.querySelectorAll(".text");
  let btnReset = 0;
  sliderBtn.addEventListener("click", function playTrain(params) {
    btnReset++;
    if (btnReset === 2) {
      window.location.reload();
    }
    audio.muted = false;
    playBtn.value = "play";
    playBtn.classList.toggle("display");
    text.forEach((e) => {
      e.classList.toggle("display");
    });
    flipCards.forEach((card) => {
      card.classList.toggle("pointer");
      card.classList.toggle("imgheight");
    });
  });
};
let counterNumber = 0;
for (let i = 0; i < audioGame.length; i++) {
  audioGame[i].src = `../assets/${cards[1][i]["audioSrc"]}`;
}
let randomNumber = Math.round(Math.random() * 7);
randomFun();
playBtn.addEventListener("click", () => {
  ////////////use imported random function to generate array of random numbers
  audio.muted = true;
  let number = randomNumArray[counterNumber];
  randomAudio(number);
  console.log(number);
  imgOnpage.forEach((img) => {
    img.addEventListener("click", function gamefunction() {
      let z = audioGame[number].src;
      let x = img.dataset.audio2;
      const source2 = document.querySelector(".sounds2");
      const audio2 = document.querySelector(".audio2");
      console.log(z);
      console.log(x);
      if (z.slice(z.length - x.length) === x) {
        source2.src = "../../assets/audio/success.mp3";
        audio2.load();
        audio2.play();
        const succesImg = new ElementBuilder("img")
          .addClass("successImg")
          .setAttribute("src", `../../assets/img/success.jpg`)
          .getElement();
        prizes.append(succesImg);
        img.parentElement.parentElement.parentElement.classList.toggle(
          "disabled"
        );
        console.log(number);
        number = randomNumArray[counterNumber];
        randomAudio(number);
      } else {
        source2.src = "../../assets/audio/error.mp3";
        audio2.load();
        audio2.play();
        const errorImg = new ElementBuilder("img")
          .addClass("errorImg")
          .setAttribute("src", `../../assets/img/failure.jpg`)
          .getElement();
        prizes.append(errorImg);
      }
      // audioChecker2(img.dataset.audio2, audioGame[randomNumber].src, img);
    });
  });
  flipCardFrontImgs.forEach((e) => {
    e.classList.add("auto");
  });
  playBtn.value = "replay";
});
// function audioChecker2(dataset, source1, img) {
//   console.log(typeof dataset);
//   console.log(source1.contains("../assets"));
// }
function randomAudio(randomNumber) {
  counterNumber++;
  audioGame[randomNumber].load();
  audioGame[randomNumber].play();
}
