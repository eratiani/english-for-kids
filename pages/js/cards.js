/////////////////////////////////////////////////// import obj/////////////////////////////
import { cards } from "./list.js";
import { cardsContainer } from "./utility.js";
import { ElementBuilder } from "./utility.js";
import { CardBuilder } from "./utility.js";
import { creaCard } from "./utility.js";
import { count } from "./utility.js";
/////////////////////////////////////////////////// import obj/////////////////////////////

/////////////////////////////////////////////////burger//////////////////////////////////////////////////////////
let burger = document.querySelector(".burger");
let navBurger = document.querySelector(".navBurger");
let bBrick = document.querySelectorAll(".burger-brick");
let overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  bBrick.forEach((e) => {
    setTimeout(() => {
      e.classList.toggle("bgChanger");
    }, 600);
  });
  if ((burger.classList = "open")) {
    burger.classList.toggle("open");
    navBurger.classList.toggle("closed");
  }

  overlay.classList.add("hidden");
  document.body.classList.remove("hoverbg");
});
burger.addEventListener("click", function () {
  document.body.classList.toggle("hoverbg");
  burger.classList.toggle("open");
  navBurger.classList.toggle("closed");
  overlay.classList.toggle("hidden");
});
let li = document.querySelectorAll(".headerLi");
li.forEach((E) => {
  E.addEventListener("click", function () {
    if ((burger.classList = "open")) {
      document.body.classList.remove("hoverbg");
      burger.classList.toggle("open");
      navBurger.classList.toggle("closed");
      overlay.classList.add("hidden");
    }
  });
});
/////////////////////////////////////////////////burger//////////////////////////////////////////////////////////
/////////////////////////////////////////////////img sources//////////////////////////////////////////////////////////
let imgs = document.querySelectorAll(".cardsImg");
let sourceCounter = 0;
imgs = Array.from(imgs);
imgs.forEach((e) => {});
/////////////////////////////////////////////////highlited element burger//////////////////////////////////////////////////////////
let burgerItems = document.querySelectorAll(".headerA");
burgerItems = Array.from(burgerItems);
burgerItems.forEach((item) => {
  if (item.dataset.type == "active") {
    item.style.borderBottom = "3px solid #F1CDB3";
  }
});
/////////////////////////////////////////////////highlited element burger//////////////////////////////////////////////////////////
/////////////////////////////////////////////////cards//////////////////////////////////////////////////////////

for (let i = 1; i < cards.length; i++) {
  const cardType = document.querySelector(".sec_1header");
  cardsContainer.innerHTML = "";
  for (let element of cards[i]) {
    if (cardType.dataset.type === "actionA") {
      element = cards[1][i - 1];
      creaCard(element);
      i++;
    }
    if (cardType.dataset.type === "actionB") {
      element = cards[2][i - 1];
      i++;
      creaCard(element);
    }
    if (cardType.dataset.type === "animalA") {
      element = cards[3][i - 1];
      i++;
      creaCard(element);
    }
    if (cardType.dataset.type === "animalB") {
      element = cards[4][i - 1];
      i++;
      creaCard(element);
    }
    if (cardType.dataset.type === "clothes") {
      element = cards[5][i - 1];
      i++;
      creaCard(element);
    }
    if (cardType.dataset.type === "emotions") {
      element = cards[6][i - 1];
      i++;
      creaCard(element);
    }
    if (cardType.dataset.type === "places") {
      element = cards[7][i - 1];
      i++;
      creaCard(element);
    } else if (cardType.dataset.type === "fFun") {
      element = cards[8][i - 1];
      i++;
      creaCard(element);
    }

    if (count % 8 === 0) {
      break;
    }
  }
}

/////////////////////////////////////////////////cards//////////////////////////////////////////////////////////
