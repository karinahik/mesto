
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const username = document.querySelector('.profile__title');
const aboutUser = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__close');

const openPopup = () => {
  popup.classList.add('popup_opened');

  form[0].value = username.textContent;
  form[1].value = aboutUser.textContent;
};


const closePopup = () => {
  popup.classList.remove('popup_opened');
};

const overlayClickHandler = (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
};


const updateData = (event) => {
  event.preventDefault();

  username.textContent = form[0].value; // input username
  aboutUser.textContent = form[1].value; // input job

  closePopup();
};

editButton.addEventListener('click', openPopup);
closeButton.addEventListener("click", closePopup);

/* popup.addEventListener('click', overlayClickHandler); */

form.addEventListener('submit', updateData);








