/////////////////////////////////////////////////// temp card obj/////////////////////////////
import { cards } from "./list.js";
export const source = document.querySelector(".sounds");
export const audio = document.querySelector(".audio");
export const imgOnpage = document.querySelectorAll("img");
/////////////////////////////////////////////////// temp card obj/////////////////////////////
let playBtn = document.querySelector(".play");

playBtn.addEventListener("click", () => {
  cards[1].forEach((audio) => {
    source.src = `../assets/${audio["audioSrc"]}`;
    audio.load();
    audio.play();
  });
});
function audioSrcChecker(elementDataset, elsource) {
  if (elementDataset === elsource) {
    source.src = `../assets/${elsource}`;
    audio.load();
    audio.play();
  }
}
////////////////////
let count = 0;
for (let i = 1; i < cards.length; i++) {
  const cardType = document.querySelector(".sec_1header");

  for (let element of cards[i]) {
    count++;
    if (cardType.dataset.type === "actionA") {
      element = cards[1][i - 1];

      imgOnpage.forEach((img) => {
        img.addEventListener("mouseover", () => {
          audioSrcChecker(img.dataset.audio, element["audioSrc"]);
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
