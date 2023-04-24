import Popup from "../components/Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._imagePopup = this._popup.querySelector(".popup__card-photo")
        this._imagePopupTitle = this._popup.querySelector(".popup__header-img")
    }

    open(name, link) {
        this._imagePopupTitle.textContent = name
        this._imagePopup.alt = "Картинка " + name
        this._imagePopup.src = link

        super.open()
    }
}


