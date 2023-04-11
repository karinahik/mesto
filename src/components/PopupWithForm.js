import Popup from "../components/Popup.js";

export default class PopupWidthForm extends Popup {
    constructor(popupSelector, callbackSubmit) {
        super(popupSelector)
        this._callbackSubmit = callbackSubmit
        this._form = this._popup.querySelector('.popup__form')
        this._inputs = [...this._form.querySelectorAll('.popup__input')]
    }

    _getInputValues() {
        const values = {}
        this._inputs.forEach((input) => {
            values[input.name] = input.value
        })
        return values

    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener("submit", (event) => {
            event.preventDefault()
            this._callbackSubmit(this._getInputValues())
        })
    }

    close() {
        super.close()
        this._form.reset()

    }

}