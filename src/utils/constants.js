// кнопки открытия попапов
const buttonEditProfile = document.querySelector('.profile__button-edit');
const buttonAddCard = document.querySelector('.profile__button-plus');

//находим форму редактирования по ее name
const formEditProfile = document.forms.popupForm

//находим форму создания карточек по ее name
const formAddProfile = document.forms.popupAdd

//находим поля в форме редактирования по их name
const fullNameEdit = formEditProfile.elements.fullname
const aboutInputEdit = formEditProfile.elements.about


export {
    buttonEditProfile,
    buttonAddCard,
    formEditProfile,
    fullNameEdit,
    aboutInputEdit,
    formAddProfile,
}
