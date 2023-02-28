//const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const username = document.querySelector('.profile__title');
const aboutUser = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__close');
const inputName = form.querySelector('#input-name');
const inputAbout = form.querySelector('#input-about');
const profilePopup = document.querySelector('.popup_type_profile');
const addCard = document.querySelector('.popup_type_add-card');
const editPlus = document.querySelector('.profile__button-plus');

const openPopup = () => popup.classList.add('.popup_opened');

const addCards = () => {
  addCard.classList.remove('display');
  addCard.classList.add('popup_opened');
};
addCards()

const profPopup = () => {
  profilePopup.classList.remove('display');
  profilePopup.classList.add('popup_opened');

};
profPopup()

const closePopup = () => {
  addCard.classList.remove('popup_opened');
  profilePopup.classList.remove('popup_opened');
};

/*
const overlayClickHandler = (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
};*/


const updateData = (event) => {
  event.preventDefault();
  username.textContent = inputName.value;
  aboutUser.textContent = inputAbout.value;

  closePopup();
};


//editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

//popup.addEventListener('click', overlayClickHandler);//

editPlus.addEventListener('click', openPopup);
addCard.addEventListener('click', openPopup);


form.addEventListener('submit', updateData);









