//////////////////////////////////////////////////// cards builder///////////////////////////////////////////////////////////

export const cardsContainer = document.querySelector(".cardsContainer");
export class ElementBuilder {
  constructor(tag) {
    this.element = document.createElement(tag);
  }

  addClass(className) {
    this.element.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.element.classlist.removeClass(className);
    return this;
  }

  addTextContent(text) {
    this.element.insertAdjacentText("beforeend", text);
    return this;
  }

  setAttribute(attributeName, value) {
    this.element.setAttribute(attributeName, value);
    return this;
  }

  removeAttribute(attributeName, value) {
    this.element.removeAttribute(attributeName, value);
    return this;
  }

  getElement() {
    return this.element;
  }
}
export class CardBuilder {
  constructor(ContainerDiv) {
    this.container = ContainerDiv;
  }
  addOuterDiv(className, secClass, tag) {
    const outerDiv = new ElementBuilder(tag)
      .addClass(className)
      .addClass(secClass)
      .getElement();
    this.container.append(outerDiv);
    this.outerDiv = outerDiv;
    return this;
  }
  addouterDivChild(className, tag) {
    const outerDivChild = new ElementBuilder(tag)
      .addClass(className)
      .getElement();
    this.outerDivChild = outerDivChild;
    this.outerDiv.append(outerDivChild);
    return this;
  }
  addflipCardFront(className, tag) {
    const flipCardFront = new ElementBuilder(tag)
      .addClass(className)
      .getElement();
    this.flipCardFront = flipCardFront;
    this.outerDivChild.append(flipCardFront);
    return this;
  }
  addflipCardFrontImg(className, tag, source, dataAtribute) {
    const flipCardFrontImg = new ElementBuilder(tag)
      .addClass(className)
      .setAttribute("data-audio", `${dataAtribute}`)
      .setAttribute("src", `${source}`)
      .getElement();
    this.flipCardFrontImg = flipCardFrontImg;
    this.flipCardFront.append(flipCardFrontImg);
    return this;
  }
  addflipCardFrontTextDiv(className, tag) {
    const flipCardFrontTextDiv = new ElementBuilder(tag)
      .addClass(className)
      .getElement();
    this.flipCardFrontTextDiv = flipCardFrontTextDiv;
    this.flipCardFront.append(flipCardFrontTextDiv);
    return this;
  }
  addflipCardFrontTextDivParagraph(className, tag, textContent) {
    const flipCardFrontTextDivParagraph = new ElementBuilder(tag)
      .addClass(className)
      .addTextContent(textContent)
      .getElement();
    this.flipCardFrontTextDivParagraph = flipCardFrontTextDivParagraph;
    this.flipCardFrontTextDiv.append(flipCardFrontTextDivParagraph);
    return this;
  }
  addflipCardFrontTextDivButton(className, tag) {
    const flipCardFrontTextDivButton = new ElementBuilder(tag)
      .addClass(className)
      .setAttribute("type", "button")
      .getElement();
    this.flipCardFrontTextDivButton = flipCardFrontTextDivButton;
    this.flipCardFrontTextDiv.append(flipCardFrontTextDivButton);
    return this;
  }
  addflipCardBack(className, tag) {
    const flipCardBack = new ElementBuilder(tag)
      .addClass(className)
      .getElement();
    this.flipCardBack = flipCardBack;
    this.outerDivChild.append(flipCardBack);
    return this;
  }
  addflipCardBackImg(className, tag, source, dataAtribute) {
    const flipCardBackImg = new ElementBuilder(tag)
      .addClass(className)
      .setAttribute("data-audio2", `${dataAtribute}`)
      .setAttribute("src", `${source}`)
      .getElement();
    this.flipCardBackImg = flipCardBackImg;
    this.flipCardBack.append(flipCardBackImg);
    return this;
  }
  addflipCardBackParagraph(className, tag, textContent) {
    const flipCardBackParagraph = new ElementBuilder(tag)
      .addClass(className)
      .addTextContent(textContent)
      .getElement();
    this.flipCardBackParagraph = flipCardBackParagraph;
    this.flipCardBack.append(flipCardBackParagraph);
    return this;
  }
}
export let count = 0;
//////////////////////////////////////////////////// cards builder///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////function///////////////////////////////////////////////////////////////////////////
export function creaCard(element) {
  const newCards = new CardBuilder(cardsContainer)
    .addOuterDiv("flip-card", "cards", "div")
    .addouterDivChild("flip-card-inner", "div")
    .addflipCardFront("flip-card-front", "div")
    .addflipCardFrontImg(
      "flipCardFrontImg",
      "img",
      "../assets/" + element["image"],
      element["audioSrc"]
    )
    .addflipCardFrontTextDiv("text", "div")
    .addflipCardFrontTextDivParagraph("paragraph", "p", element["word"])
    // .addflipCardFrontTextDivButton("btnFlip","input")
    .addflipCardBack("flip-card-back", "div")
    .addflipCardBackImg(
      "flipCardFrontImg",
      "img",
      "../assets/" + element["image"],
      element["audioSrc"]
    )
    .addflipCardBackParagraph("paragraphGeo", "p", element["translation"]);
  count++;
}
////////////////////////////// random number
export let randomNumArray = [];
export const randomFun = function randomizer() {
  for (var a = [0, 1, 2, 3, 4, 5, 6, 7], i = a.length; i--; ) {
    let random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    randomNumArray.push(random);
  }
};
