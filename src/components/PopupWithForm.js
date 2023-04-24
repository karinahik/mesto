import Popup from "../components/Popup.js"

export default class PopupWithForm extends Popup {
    constructor(selector, callbackSubmit) {
        super(selector)
        this._callbackSubmit = callbackSubmit
        this._form = this._popup.querySelector(".popup__form")
        console.log(this._form)
        this._inputs = [...this._form.querySelectorAll(".popup__input")]
        this._form.addEventListener("submit", (event) => {
            event.preventDefault()
            const replacementText = event.submitter.textContent
            // Смена текста кнопки при сохранение данных
            event.submitter.textContent = "Сохранение..."
            this._callbackSubmit(this._getInputValues())
                .then(() => this.close())
                .finally(() => {
                    event.submitter.textContent = replacementText
                })
        })
    }

    _getInputValues() {
        const values = {}
        this._inputs.forEach((input) => {
            values[input.name] = input.value
        })
        return values
    }

    setInputValue(data) {
        this._inputs.forEach((input) => {
            input.value = data[input.name]
        })
    }

    close() {
        super.close()
        this._form.reset()
    }
}