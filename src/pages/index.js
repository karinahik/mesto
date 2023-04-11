// Подключаем index.css к файлу
import './index.css';

// Импорты переменных 
import { validationConfig } from '../utils/validationConfig.js';
import { initialCards } from '../utils/initialCards.js';
import {
  editButton,
  addCardButton,
  formEditProfile,
  editFullName,
  editAboutInput,
  formAddProfile,
} from '../utils/constants.js';


// Импорты классов
import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

function createCard(item) {
  return new Card(item, '.card__template', () =>
    popupOpenImage.open(item)
  ).generateCard()
}

//передача текста на страницу профиля редактирования полей Имя, О себе
function formValues(value) {
  userInfo.setUserInfo(value.fullname, value.about)
  classEditPopup.close()
}

//Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
const userInfo = new UserInfo({
  titleSelector: ".profile__title",
  subtitleSelector: ".profile__text",
})

//функция открытия попапа редактирования профиля
function openEditProfile() {
  const { title, subtitle } = userInfo.getUserInfo()
  console.log(title)
  editFullName.value = title
  editAboutInput.value = subtitle
  formEditValidator.disableSubmitButton()
  classEditPopup.open()
}

//функция открытия попапа для создания новой карточки
function popupAddCardProfile() {
  formCardValidator.disableSubmitButton()
  classCardPopup.open()
}

//создание класса редактирования профиля
const classEditPopup = new PopupWithForm(
  '.popup_type-profile',
  formValues
)
classEditPopup.setEventListeners()

//отрисовка карточек на странице из обьекта initialCards
const cardSection = new Section(
  {
    renderer: (item) => cardSection.addItem(createCard(item)),
  },
  '.cards'
)

const classCardPopup = new PopupWithForm(
  '.popup_type_add-card',
  (item) => {
    cardSection.addItem(createCard(item))
    classCardPopup.close()
  }
)
classCardPopup.setEventListeners()

//создается обьект класса PopupWithImage
const popupOpenImage = new PopupWithImage('.popup_type_img')
popupOpenImage.setEventListeners()

//валидация формы попап редактирования профиля
const formEditValidator = new FormValidator(validationConfig, formEditProfile)
formEditValidator.enableValidation()

//валидация формы попап создания карточек
const formCardValidator = new FormValidator(validationConfig, formAddProfile)
formCardValidator.enableValidation()

//кнопки открытия попапов
addCardButton.addEventListener("click", () => popupAddCardProfile())
editButton.addEventListener("click", () => openEditProfile())



cardSection.renderItems(initialCards.reverse())



