import Card from './Card.js';
import { FormValidator } from './FormValidator.js';
import { validationConfig } from '../utils/validationConfig.js'
import { initialCards } from '../utils/initialCards.js';


const profileForm = document.querySelector('#profile__form');
const username = document.querySelector('.profile__title');
const aboutUser = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__button-edit');
const closeButtons = Array.from(document.querySelectorAll(".popup__close-img"));
const inputName = profileForm.querySelector('#inputName');
const inputAbout = profileForm.querySelector('#inputAbout');
const profilePopup = document.querySelector('.popup_type-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardButton = document.querySelector('.profile__button-plus');
const addCardForm = document.querySelector("#card__form");
const popupImg = document.querySelector('.popup__img');
const popupType = document.querySelector('.popup_type_img');
const allPopups = document.querySelectorAll('.popup');

const cardsContainer = document.querySelector(".cards");


const cardPhoto = document.querySelector('.popup__card-photo');
const headerImg = document.querySelector('.popup__header-img');
const inputValue = document.querySelector("#inputLink");
const inputMesto = document.querySelector("#inputMesto");


// конфиг экземпляр
const popupEditProfileValidation = new FormValidator(validationConfig, profilePopup)
popupEditProfileValidation.enableValidation()

const popupAddCardValidation = new FormValidator(
  validationConfig,
  addCardPopup
)
popupAddCardValidation.enableValidation()


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
  popupEditProfileValidation.disableSubmitButton()
  closePopup(profilePopup);
};

// popup close Buttons
closeButtons.forEach((btn) => btn.addEventListener("click", evt => closePopup(evt.target.closest('.popup'))));

// popup Open Buttons
editButton.addEventListener('click', () => {
  inputName.value = username.textContent;
  inputAbout.value = aboutUser.textContent;
  openPopup(profilePopup);
});
addCardButton.addEventListener('click', () => {
  openPopup(addCardPopup);
  addCardForm.reset();
  popupAddCardValidation.disableSubmitButton()
});

profileForm.addEventListener('submit', updateProfileData);


function openImage(card, link) {
  cardPhoto.src = link;
  cardPhoto.alt = card;
  headerImg.textContent = card;

  openPopup(popupType);
}

// -------- New Card (Экземпляр) ---------

function createCard(value) {
  const card = new Card(value, '.card__template', openImage).generateCard()
  return card
}


function renderCard(card, cardsContainer) {
  cardsContainer.prepend(card);
}

function render() {
  initialCards.reverse().forEach((value) => {
    const newCard = createCard(value)
    if (newCard) renderCard(newCard, cardsContainer)
  })
}
render()


addCardForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const name = inputMesto.value
  const link = inputValue.value
  const newCard = createCard({ name, link })
  if (newCard) renderCard(newCard, cardsContainer)

  closePopup(addCardPopup)
})





