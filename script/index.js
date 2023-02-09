const popup = document.querySelector(".popup");
const form = document.querySelector(".popup__form");
const username = document.querySelector(".profile__title");
const aboutUser = document.querySelector(".profile__text");
const editButton = document.querySelector(".profile__button-edit");
const closeButton = document.querySelector(".popup__close");
const usernameInput = document.querySelector(".popup__input_name");
const aboutUserInput = document.querySelector(".popup__input_about");

const openPopup = () => {
  document.body.style.overflow = "hidden";

  popup.classList.add("popup_opened");

  usernameInput.value = username.textContent;
  aboutUserInput.value = aboutUser.textContent;
};
const closePopup = () => {
  document.body.style.overflow = "visible";

  popup.classList.remove("popup_opened");
};

const overlayClickHandler = (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
};

const getInputValue = (inputSelector) => {
  console.log(inputSelector.value);
  return inputSelector.value;
};

const updateData = (event) => {
  event.preventDefault();

  const name = getInputValue(usernameInput);
  const about = getInputValue(aboutUserInput);

  username.textContent = name;
  aboutUser.textContent = about;

  closePopup();
};

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

popup.addEventListener("click", overlayClickHandler);

form.addEventListener("submit", updateData);




  

  
  
