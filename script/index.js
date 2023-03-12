const profileForm = document.querySelector('#profile__form');
const username = document.querySelector('.profile__title');
const aboutUser = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__button-edit');
const closeButtons = Array.from(document.querySelectorAll(".popup__close-img"));
const inputName = profileForm.querySelector('#input-name');
const inputAbout = profileForm.querySelector('#input-about');
const profilePopup = document.querySelector('.popup_type-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardButton = document.querySelector('.profile__button-plus');
const addCardForm = document.querySelector("#card__form");
const popupImg = document.querySelector('.popup__img');
const popupType = document.querySelector('.popup_type_img');
const allPopups = document.querySelectorAll('.popup');

const templateCard = document.querySelector('#card__template');

const cardsContainer = document.querySelector(".cards");
const cardPhoto = document.querySelector('.popup__card-photo');
const headerImg = document.querySelector('.popup__header-img');
const inputValue = document.querySelector("#input-link").value;
const inputMesto = document.querySelector("#input-mesto").value;






//  Open popup 
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handlerEscClose)
}


// Close popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handlerEscClose)

}



function handlerEscClose(e) {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }

}

allPopups.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close')) {
      closePopup(item);

    }
  });
});


const updateProfileData = (event) => {
  event.preventDefault();
  username.textContent = inputName.value;
  aboutUser.textContent = inputAbout.value;
  closePopup(profilePopup);



};

// popup close Buttons
closeButtons.forEach((btn) => btn.addEventListener("click", evt => closePopup(evt.target.closest('.popup'))));

// popup Open Buttons
editButton.addEventListener('click', () =>
  openPopup(profilePopup));
addCardButton.addEventListener('click', () => {
  openPopup(addCardPopup);
  addCardForm.reset();
  toggleButton(addCardForm, formValidationConfig);
});


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


  cardImg.addEventListener('click', (event) => {
    cardPhoto.src = event.target.src;
    cardPhoto.alt = event.target.alt;
    headerImg.textContent = event.target.alt;

    openPopup(popupType);

  });

  return clone;

};


const addNewCard = () => {
  const item = {
    name: inputMesto,
    link: inputValue,
  }
  renderCard(item);

};


const renderCard = (item) => {
  cardsContainer.prepend(createCard(item));
}

initialCards.forEach((item) => renderCard(item))

addCardForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addNewCard();
  closePopup(addCardPopup);

});





