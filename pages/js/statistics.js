//////////////////////// import//////////////////////////////
import { cards } from "./list.js";

//////////////////////// import//////////////////////////////
const tHead = document.querySelectorAll(".tableHead");
const everyCard = document.querySelectorAll(".everyCard");
const everyCardTranslation = document.querySelectorAll(".everyCardTranslation");
const answers = document.querySelectorAll(".statisticsAnswers");
let number = 0;
let number2 = 0;
let number3 = 1;
tHead.forEach((e) => {
  e.textContent = `${cards[0][number]}`;
  number++;
});
cards.forEach((e) => {
  for (let i = 0; i < 8; i++) {
    everyCard[number2].textContent = `${cards[number3][i]["word"]}`;
    everyCardTranslation[
      number2
    ].textContent = `${cards[number3][i]["translation"]}`;
    number2++;
  }
  number3++;
});
