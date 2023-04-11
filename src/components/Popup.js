export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._handlerEscClose = this._handleEscClose.bind(this)
    }

    open() {
        this._popup.classList.add('popup_opened')
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        })
    }

    close() {
        this._popup.classList.remove('popup_opened')
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        })
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close()
        }
    }

    _handleClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close()
        }
    }

    setEventListeners() {
        document.addEventListener('mouseup', (evt) => {
            this._handleClose(evt)
        })
        this._popup.querySelector('.popup__close').addEventListener('click', () => {
            this.close()
        })
    }


}