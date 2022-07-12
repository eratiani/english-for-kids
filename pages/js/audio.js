/////////////////////////////////////////////////// import expoer/////////////////////////////
import { cards } from "./list.js";
export const source = document.querySelector(".sounds");
export const audio = document.querySelector(".audio");
export const imgOnpage = document.querySelectorAll("img");
/////////////////////////////////////////////////// import export/////////////////////////////
////////////////////////////////////////////////////////// audio for hover efect on cards////////////////////////////////////////////
let playBtn = document.querySelector(".play");
let clickArray = [];
let clickObj = {};

playBtn.addEventListener("click", () => {
  cards[1].forEach((audio) => {
    source.src = `../assets/${audio["audioSrc"]}`;
    audio.load();
    audio.play();
  });
});
function audioSrcChecker(elementDataset, elsource, elName) {
  hoverCount++;
  if (elementDataset === elsource) {
    clickObj = {
      elName: hoverCount,
    };
    clickArray.push(clickObj);

    source.src = `../assets/${elsource}`;
    audio.load();
    audio.play();
  }
}
////////////////////
let count = 0;
//////////////////////////////////////// check which page it is and distribute audio///////////////////////////////////
let hoverCount = 0;
for (let i = 1; i < cards.length; i++) {
  const cardType = document.querySelector(".sec_1header");

  for (let element of cards[i]) {
    count++;
    if (cardType.dataset.type === "actionA") {
      element = cards[1][i - 1];

      imgOnpage.forEach((img) => {
        img.addEventListener("mouseover", () => {
          audioSrcChecker(
            img.dataset.audio,
            element["audioSrc"],
            element["word"]
          );
        });
      });
      i++;
    }
    if (cardType.dataset.type === "actionB") {
      element = cards[2][i - 1];
      i++;
      imgOnpage.forEach((img) => {
        img.addEventListener("mouseover", () => {
          audioSrcChecker(img.dataset.audio, element["audioSrc"]);
        });
      });
    }
    if (cardType.dataset.type === "animalA") {
      element = cards[3][i - 1];
      i++;
      imgOnpage.forEach((img) => {
        img.addEventListener("mouseover", () => {
          audioSrcChecker(img.dataset.audio, element["audioSrc"]);
        });
      });
    }
    if (cardType.dataset.type === "animalB") {
      element = cards[4][i - 1];
      i++;
      imgOnpage.forEach((img) => {
        img.addEventListener("mouseover", () => {
          audioSrcChecker(img.dataset.audio, element["audioSrc"]);
        });
      });
    }
    if (cardType.dataset.type === "clothes") {
      element = cards[5][i - 1];
      i++;
      imgOnpage.forEach((img) => {
        img.addEventListener("mouseover", () => {
          audioSrcChecker(img.dataset.audio, element["audioSrc"]);
        });
      });
    }
    if (cardType.dataset.type === "emotions") {
      element = cards[6][i - 1];
      i++;
      imgOnpage.forEach((img) => {
        img.addEventListener("mouseover", () => {
          audioSrcChecker(img.dataset.audio, element["audioSrc"]);
        });
      });
    }
    if (cardType.dataset.type === "places") {
      element = cards[7][i - 1];
      i++;
      imgOnpage.forEach((img) => {
        img.addEventListener("mouseover", () => {
          audioSrcChecker(img.dataset.audio, element["audioSrc"]);
        });
      });
    } else if (cardType.dataset.type === "fFun") {
      element = cards[8][i - 1];
      i++;
      imgOnpage.forEach((img) => {
        img.addEventListener("mouseover", () => {
          audioSrcChecker(img.dataset.audio, element["audioSrc"]);
        });
      });
    }

    if (count % 8 === 0) {
      break;
    }
  }
}
