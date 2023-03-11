const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    buttonClass: 'popup__save'



}


function disableSubmit(event) {
    event.preventDefault();
}

/**
 *  функция получает формы после чего производится взоимодействие с ними
 * @param {*} object 
 */
function enableValidatuion(object) {
    const formList = array.from(document.querySelectorAll(object.formSelector));

    formList.forEach(item => {
        item.addEventListener('submit', disableSubmit);

        addInpuiListeners(item, object);
        toggleButton(item.object);
    })
}



/**
 * Обработать ввод в input
 * @param {*} event событие input
 * @param {*} object объект
 */
function handleFormInput(event, object) {
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);


    if (input.validity.valid) {
        input.classList.remove(object.inputErrorClass);
        errorElement.textContent = '';
    } else {
        input.classList.add(object.inputErrorClass);
        errorElement.textContent = input.validationMessage;
    }
}


function toggleButton(formList, object) {
    const buttonSubmit = formList.querySelector(object.buttonClass)

}

function addInpuiListeners(formList, object) {
    const inputList = Array.from(formList.querySelectorAll(object.inputSelector));

    inputList.forEach(function (item) {
        item.addEventListener('input', (event) => {
            handleFormInput(event, object)

        });

    });
}



enableValidatuion(formValidationConfig);






