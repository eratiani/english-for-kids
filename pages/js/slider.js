import { cards } from "./list.js";
import { source } from "./audio.js";
import { cardType } from "./cards.js";
import { audio } from "./audio.js";
import { imgOnpage } from "./audio.js";
import { randomNumArray } from "./utility.js";
import { randomFun } from "./utility.js";
import { ElementBuilder } from "./utility.js";
//////////////////////////////////////////////////////////// slider btn functionality play mode////////////////////////////////////////////////////////
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
//////////////////////////////// audio distribution on pages for play mode////////////////////////////////////////////////////////////////
for (let i = 0; i < audioGame.length; i++) {
  if (cardType.dataset.type === "actionA") {
    audioGame[i].src = `../assets/${cards[1][i]["audioSrc"]}`;
  }
  if (cardType.dataset.type === "actionB") {
    audioGame[i].src = `../assets/${cards[2][i]["audioSrc"]}`;
  }
  if (cardType.dataset.type === "animalA") {
    audioGame[i].src = `../assets/${cards[3][i]["audioSrc"]}`;
  }
  if (cardType.dataset.type === "animalB") {
    audioGame[i].src = `../assets/${cards[4][i]["audioSrc"]}`;
  }
  if (cardType.dataset.type === "clothes") {
    audioGame[i].src = `../assets/${cards[5][i]["audioSrc"]}`;
  }
  if (cardType.dataset.type === "emotions") {
    audioGame[i].src = `../assets/${cards[6][i]["audioSrc"]}`;
  }
  if (cardType.dataset.type === "places") {
    audioGame[i].src = `../assets/${cards[7][i]["audioSrc"]}`;
  } else if (cardType.dataset.type === "fFun") {
    audioGame[i].src = `../assets/${cards[8][i]["audioSrc"]}`;
  }
}
let win = 0;
let loose = 0;
let randomNumber = Math.round(Math.random() * 7);
randomFun();
playBtn.addEventListener("click", function smth() {
  ////////////use imported random function to generate array of random numbers
  let number = randomNumArray[counterNumber];
  if (audio.muted) {
    number = randomNumArray[counterNumber - 1];
    randomAudio(number);
  }
  randomAudio(number);
  audio.muted = true;
  imgOnpage.forEach((img) => {
    img.addEventListener("click", function gamefunction() {
      let z = audioGame[number].src;
      let x = img.dataset.audio2;
      const source2 = document.querySelector(".sounds2");
      const audio2 = document.querySelector(".audio2");

      if (z.slice(z.length - x.length) === x) {
        source2.src = "../assets/audio/success.mp3";
        win++;
        audio2.load();
        audio2.play();
        const succesImg = new ElementBuilder("img")
          .addClass("successImg")
          .setAttribute("src", `../assets/img/success.jpg`)
          .getElement();
        prizes.append(succesImg);
        img.parentElement.parentElement.parentElement.classList.toggle(
          "disabled"
        );

        number = randomNumArray[counterNumber];
        randomAudio(number);
      } else {
        source2.src = "../assets/audio/error.mp3";
        loose++;
        audio2.load();
        audio2.play();
        const errorImg = new ElementBuilder("img")
          .addClass("errorImg")
          .setAttribute("src", `../assets/img/failure.jpg`)
          .getElement();
        prizes.append(errorImg);
      }
      console.log(win);
      console.log(loose);
      if (win == 7 && loose == 0) {
        document.body.innerHTML = "you win";
      } else if (win == 7 && loose > 0) {
        document.body.innerHTML = "you loose try again";
      }
    });
  });
  flipCardFrontImgs.forEach((e) => {
    e.classList.add("auto");
  });
  playBtn.value = "replay";
});

function randomAudio(randomNumber) {
  counterNumber++;
  audioGame[randomNumber].load();
  audioGame[randomNumber].play();
}
