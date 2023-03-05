const profileForm = document.querySelector('#profile__form');
const username = document.querySelector('.profile__title');
const aboutUser = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__button-edit');
const closeButtons = Array.from(document.querySelectorAll(".popup__close"));
const inputName = profileForm.querySelector('#input-name');
const inputAbout = profileForm.querySelector('#input-about');
const profilePopup = document.querySelector('.popup_type-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const editPlus = document.querySelector('.profile__button-plus');
const addCardForm = document.querySelector("#card__form");


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


profileForm.addEventListener('submit', updateData);


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

// Add like

const toggleLike = (cardButton, cardImgButton) => {
  cardButton.classList.toggle('liked');

  if (cardButton.classList.contains('liked')) {
    cardImgButton.src = '../images/like.png';
  } else {
    cardImgButton.src = '../images/Group.svg';
  }
};

const createCard = (item) => {
  const templateCard = document.querySelector('#card__template');
  const clone = templateCard.content.cloneNode(true);
  const cardImg = clone.querySelector('.card__img');
  const cardtext = clone.querySelector('.card__text');
  const cardButton = clone.querySelector('.card__like-button');
  const cardImgButton = clone.querySelector('.card__like');

  cardImg.src = item.link;
  cardImg.alt = item.name;
  cardtext.textContent = item.name;

  // Add like
  cardButton.addEventListener('click', () => toggleLike(cardButton, cardImgButton));

  return clone;
};


const inputPopup = () => {
  const inputValue = document.querySelector("#input-link").value;
  const inputMesto = document.querySelector("#input-mesto").value;


  const item = {
    name: inputMesto,
    link: inputValue,


  }
  renderCard(item);

};

const divContainer = document.querySelector(".cards");

const renderCard = (item) => {
  divContainer.prepend(createCard(item));
}

initialCards.forEach((item) => renderCard(item))

addCardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  inputPopup() // add cards
  closePopup()
});




















































