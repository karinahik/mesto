const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',

}

//
function disableSubmit(event) {
    event.preventDefault();
}


function enableValidatuion(object) {
    const formList = document.querySelectoAll(object.formSelector);

    // 
    formList.addEventListener('submit', disableSubmit);

    formList.forEach(item => {

    })

    addInpuiListeners(formList, object);
}

//
function addInpuiListeners(formList, object) {
    const inputList = formList.querySelectorAll(object.inputSelector);

    inputList.forEach(function (item) {
        console.log(item)
    });
}

enableValidatuion(formValidationConfig);


function handleFormInput(event, object) {

}







