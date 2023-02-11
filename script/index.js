const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const username = document.querySelector('.profile__title');
const aboutUser = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__close');
const inputName = form.querySelector('#input-name');
const inputAbout = form.querySelector('#input-about');

const openPopup = () => {
  popup.classList.add('popup_opened');

  inputName.value = username.textContent;
  inputAbout.value = aboutUser.textContent;
};

const closePopup = () => {
  popup.classList.remove('popup_opened');
};

/* const overlayClickHandler = (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}; */

const updateData = (event) => {
  event.preventDefault();

  username.textContent = inputName.value;
  aboutUser.textContent = inputAbout.value;

  closePopup();
};

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

/* popup.addEventListener('click', overlayClickHandler); */

form.addEventListener('submit', updateData);








