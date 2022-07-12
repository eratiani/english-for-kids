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
li.forEach((item) => {
  item.addEventListener("click", function () {
    if ((burger.classList = "open")) {
      document.body.classList.remove("hoverbg");
      burger.classList.toggle("open");
      navBurger.classList.toggle("closed");
      overlay.classList.add("hidden");
    }
  });
});
/////////////////////////////////////////////////burger//////////////////////////////////////////////////////////
