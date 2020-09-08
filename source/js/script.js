let menu = document.querySelector(".main-nav__toggle");
let subMenuFirst = document.querySelector(".main-nav__list");
let subMenuSecond = document.querySelector(".main-nav__user-block");

clickMenu();

menu.addEventListener("click", clickMenu);

function clickMenu() {
  menu.classList.toggle("main-nav__toggle--open");
  subMenuFirst.classList.toggle("main-nav__list--close");
  subMenuSecond.classList.toggle("main-nav__user-block--close");
}

let modalBasketButton = document.querySelectorAll(".good__button, .catalog-goods__basket, .modal-basket__add");
let modalBasket = document.querySelector(".modal-basket");


for (let i = 0; i < modalBasketButton.length; i++) {
  modalBasketButton[i].addEventListener("click", (evt) => {
    //evt.preventDefault();
    modalBasket.classList.toggle("modal-basket--open");
  } );
}

document.addEventListener("click", (evt) => {
  const flyoutElement = document.querySelector(".modal-basket__wrapper");
  let targetElement = evt.target; // clicked element

  if (targetElement.classList.contains("good__button")||targetElement.classList.contains("catalog-goods__basket-img")) {
    return;
  }
  do {
    if (targetElement == flyoutElement) {
      // This is a click inside. Do nothing, just return.
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);

  // This is a click outside.

  if (modalBasket.classList.contains("modal-basket--open")) {
    modalBasket.classList.remove("modal-basket--open");
  }
});
