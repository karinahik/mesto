// Подключаем index.css к файлу
import './index.css';

// Импорты переменных 
import { validationConfig } from '../utils/validationConfig.js';

import {
  buttonEditProfile,
  buttonAddCard,
  formEditProfile,
  formAddProfile,
  profileUpdateAvatar,
  formUpdateAvatar,
  nameProfile,
  aboutProfile,
  avatarProfile,
} from '../utils/constants.js';


// Импорты классов
import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirmation from '../components/PopupConfirmation.js';


let userId

import Api from "../components/Api.js"


// Функция создания карточек по экземпляру класса Card
function createCard(data) {
  const card = new Card(
    data,
    ".card__template",
    openPopupImage,

    userId,
    async () => {
      try {
        const response = await api.addLike(data._id)
        card.like()
        card.likesCount(response)
      } catch (error) {
        return console.log(`Ошибка: ${error}`)
      }
    },
    async () => {
      try {
        const response = await api.removeLike(data._id)
        card.dislike()
        card.likesCount(response)
      } catch (error) {
        return console.log(`Ошибка: ${error}`)
      }
    },
    () => {
      popupConfirmation.open(card)
    }
  )

  return card.generateCard()
}

//Открытие увеличенной картинки
function openPopupImage(name, link) {
  popupImage.open(name, link)
}

// Форма редактирования профиля
async function handleSubmitFormEditProfile(data) {
  try {
    const userProfile = await api.editProfileUserInfo(data)
    user.setUserInfo(userProfile)
  } catch (error) {
    return console.log(`Ошибка: ${error}`)
  }
}

// Форма обновления аватара
async function handleSubmitFormUpdateAvatar(data) {
  try {
    const userProfile = await api.updateProfileUserAvatar(data)
    user.setUserInfo(userProfile, avatarProfile)
  } catch (error) {
    return console.log(`Ошибка: ${error}`)
  }
}

// Форма добавления карточек
async function handleSubmitFormAddCard(data) {
  try {
    const newCard = await api.getNewCard(data)
    cardList.addItem(createCard(newCard))
  } catch (error) {
    return console.log(`Ошибка: ${error}`)
  }
}

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm
const popupImage = new PopupWithImage('.popup_type_img')

const popupAdd = new PopupWithForm(
  '.popup_type_add-card',
  handleSubmitFormAddCard
)

const popupEdit = new PopupWithForm(
  '.popup_type-profile',
  handleSubmitFormEditProfile
)

const popupAvatar = new PopupWithForm(
  '.popup_type_update-avatar',
  handleSubmitFormUpdateAvatar
)

const user = new UserInfo({
  name: nameProfile,
  about: aboutProfile,
  avatar: avatarProfile,
})

buttonEditProfile.addEventListener(
  "click",
  () => {
    popupEdit.open()
    popupEdit.setInputValue(user.getUserInfo())
    validatorFormEditProfile.disableSubmitButton()
  },
  false
)

profileUpdateAvatar.addEventListener(
  "click",
  () => {
    popupAvatar.open()
    validatorFormUpdateAvatar.disableSubmitButton()
  },
  false
)

buttonAddCard.addEventListener(
  "click",
  () => {
    popupAdd.open()
    validatorFormAddProfile.disableSubmitButton()
  },
  false
)

// Для каждой проверяемой формы новый экземпляр класса FormValidator
const validatorFormEditProfile = new FormValidator(
  validationConfig,
  formEditProfile
)

validatorFormEditProfile.enableValidation()

const validatorFormAddProfile = new FormValidator(
  validationConfig,
  formAddProfile
)

validatorFormAddProfile.enableValidation()

const validatorFormUpdateAvatar = new FormValidator(
  validationConfig,
  formUpdateAvatar
)

validatorFormUpdateAvatar.enableValidation()

const popupConfirmation = new PopupConfirmation(
  '.popup_type_confirmation',
  async (card) => {
    api
      .removeCard(card._id)
      .then(() => {
        card.remove()
        popupConfirmation.close()
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
  }
)

// Загружка карточек с сервера
const cardList = new Section(
  {
    renderer: (data) => {
      const card = createCard(data)

      cardList.addItem(card)
    },
  },
  ".cards"
)

console.log()

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "2b6aed48-0aca-459c-82b0-27c168b66ad4",
    "Content-Type": "application/json",
  },
})

// Отрисовка карточек с сервера + отрисовка данных пользователя
Promise.all([api.getRealUserInfo(), api.getCards()])
  .then(([userProfile, cards]) => {
    user.setUserInfo(userProfile, avatarProfile)
    userId = userProfile._id
    cardList.renderItems(cards.reverse())
  })

  .catch((error) => console.log(`Ошибка: ${error}`))



