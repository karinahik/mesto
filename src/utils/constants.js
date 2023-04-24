// кнопки открытия попапов
const buttonEditProfile = document.querySelector('.profile__button-edit');
const buttonAddCard = document.querySelector('.profile__button-plus');
const profileUpdateAvatar = document.querySelector(".profile__edit-avatar")


//константы профиля
const nameProfile = document.querySelector(".profile__title")
const aboutProfile = document.querySelector(".profile__text")
const avatarProfile = document.querySelector(".profile__avatar-photo")

//находим форму обновления аватара по ее name
const formUpdateAvatar = document.forms.editAvatarForm

//находим форму редактирования по ее name
const formEditProfile = document.forms.popupForm

//находим форму создания карточек по ее name
const formAddProfile = document.forms.popupAdd




export {
    buttonEditProfile,
    buttonAddCard,
    formEditProfile,
    formAddProfile,
    nameProfile,
    aboutProfile,
    avatarProfile,
    profileUpdateAvatar,
    formUpdateAvatar
}
