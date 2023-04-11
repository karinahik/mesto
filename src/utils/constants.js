// кнопки открытия попапов
const editButton = document.querySelector('.profile__button-edit');
const addCardButton = document.querySelector('.profile__button-plus');

//находим форму редактирования по ее name
const formEditProfile = document.forms.popupForm

//находим форму создания карточек по ее name
const formAddProfile = document.forms.popupAdd

//находим поля в форме редактирования по их name
const editFullName = formEditProfile.elements.fullname
const editAboutInput = formEditProfile.elements.about


export {
    editButton,
    addCardButton,
    formEditProfile,
    editFullName,
    editAboutInput,
    formAddProfile,
}
