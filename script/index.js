const form = document.querySelector('.popup__form');
const username = document.querySelector('.profile__title');
const aboutUser = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__button-edit');
const closeButtons = Array.from(document.querySelectorAll(".popup__close"));
const inputName = form.querySelector('#input-name');
const inputAbout = form.querySelector('#input-about');
const profilePopup = document.querySelector('.popup_type-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const editPlus = document.querySelector('.profile__button-plus');
const templateCard = document.querySelector('#card__template');



//  Open popup 
const openPopup = (popup) => {
  popup.classList.remove('display');
  popup.classList.add('popup_opened');
};

//  Close popup
const closePopup = () => {
  addCardPopup.classList.remove('popup_opened');
  profilePopup.classList.remove('popup_opened');
};



/*
const overlayClickHandler = (event) => {
  if (event.target === event.currentTarget) {
    closePopup();о
  }
};*/


const updateData = (event) => {
  event.preventDefault();
  username.textContent = inputName.value;
  aboutUser.textContent = inputAbout.value;

  closePopup();
};

// popup close Buttons
closeButtons[0].addEventListener('click', closePopup);
closeButtons[1].addEventListener('click', closePopup);

// popup Open Buttons
editButton.addEventListener('click', () => openPopup(profilePopup));
editPlus.addEventListener('click', () => openPopup(addCardPopup));

form.addEventListener('submit', updateData);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const inputPopup = () => {
  const inputValue = document.querySelector('#input-link').value;
  const inputMesto = document.querySelector('#input-mesto').value;

};







































