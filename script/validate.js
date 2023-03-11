const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    buttonSelector: '.popup__save',
    buttonDisabledClass: 'popup__save-button_inactive',

}


function enableValidatuion(object) {
    const formList = Array.from(document.querySelectorAll(object.formSelector));

    formList.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        item.addEventListener('input', () => {
            toggleButton(item, object);
        })
        addInpuiListeners(item, object);
        toggleButton(item, object);
    })
};


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
};


function toggleButton(formList, object) {
    const buttonSubmit = formList.querySelector(object.buttonSelector);
    const isFormValid = formList.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(object.buttonDisabledClass, !isFormValid);
}

function addInpuiListeners(formList, object) {
    const inputList = Array.from(formList.querySelectorAll(object.inputSelector));

    inputList.forEach(function (item) {
        item.addEventListener('input', (event) => {
            handleFormInput(event, object)
        });


    });
};


enableValidatuion(formValidationConfig);








