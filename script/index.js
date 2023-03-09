const profileForm = document.querySelector('#profile__form');
const username = document.querySelector('.profile__title');
const aboutUser = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__button-edit');
const closeButtons = Array.from(document.querySelectorAll(".popup__close-img"));
const inputName = profileForm.querySelector('#input-name');
const inputAbout = profileForm.querySelector('#input-about');
const profilePopup = document.querySelector('.popup_type-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const addcardButton = document.querySelector('.profile__button-plus');
const addCardForm = document.querySelector("#card__form");
const popupImg = document.querySelector('.popup__img');
const popupType = document.querySelector('.popup_type_img');


//  Open popup 
const openPopup = (popup) => {
  popup.classList.add('popup_opened');


};

//  Close popup
const closePopup = (popup) => {

  popup.classList.remove('popup_opened');

  // addCardPopup.classList.remove('popup_opened');
  // profilePopup.classList.remove('popup_opened');
  // popupType.classList.remove("popup_opened");

};


const updateProfileData = (event) => {
  event.preventDefault();
  username.textContent = inputName.value;
  aboutUser.textContent = inputAbout.value;

  closePopup(event.target.closest('.popup'));
};

// popup close Buttons
closeButtons.forEach((btn) => btn.addEventListener("click", evt => closePopup(evt.target.closest('.popup'))));

// popup Open Buttons
editButton.addEventListener('click', () => openPopup(profilePopup));
addcardButton.addEventListener('click', () => openPopup(addCardPopup));


profileForm.addEventListener('submit', updateProfileData);


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

const toggleLike = (cardButtonLike, cardImgButtonLike) => {
  cardButtonLike.classList.toggle('liked');

  if (cardButtonLike.classList.contains('liked')) {
    cardImgButtonLike.src = "./images/like.png";
  } else {
    cardImgButtonLike.src = "./images/Group.svg";
  }
};

const createCard = (item) => {
  const templateCard = document.querySelector('#card__template');
  const clone = templateCard.content.cloneNode(true);
  const cardImg = clone.querySelector('.card__img');
  const cardtext = clone.querySelector('.card__text');
  const cardButtonLike = clone.querySelector('.card__like-button');
  const cardImgButtonLike = clone.querySelector('.card__like');


  cardImg.src = item.link;
  cardImg.alt = item.name;
  cardtext.textContent = item.name;

  // Add like
  cardButtonLike.addEventListener('click', () => toggleLike(cardButtonLike, cardImgButtonLike));


  //  Delete Card
  const cardDelete = clone.querySelector('.card__delete');
  cardDelete.addEventListener('click', (event) => {
    const cardItem = event.target.closest('.card')
    cardItem.remove();
  });



  // ================== Open Img =================



  const cardPhoto = document.querySelector('.popup__card-photo');
  const headerImg = document.querySelector('.popup__header-img');


  cardImg.addEventListener('click', (event) => {
    openPopup(popupType);
    cardPhoto.src = event.target.src;
    headerImg.textContent = event.target.parentElement.querySelector('.card__text').textContent;
  });



  return clone;

};


const addNewCard = () => {
  const inputValue = document.querySelector("#input-link").value;
  const inputMesto = document.querySelector("#input-mesto").value;


  const item = {
    name: inputMesto,
    link: inputValue,


  }
  renderCard(item);

};

const cardsContainer = document.querySelector(".cards");

const renderCard = (item) => {
  cardsContainer.prepend(createCard(item));
}

initialCards.forEach((item) => renderCard(item))

addCardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewCard() // add cards
  closePopup('popup')
  addCardForm.reset()
});
