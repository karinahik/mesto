import Popup from "../components/Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._cardImg = this._popup.querySelector('.popup__card-photo')
        this._text = this._popup.querySelector('.popup__header-img')
    }

    open = (item) => {
        this._cardImg.src = item.link
        this._cardImg.alt = item.name
        this._text.textContent = item.name

        super.open()
    }

}


