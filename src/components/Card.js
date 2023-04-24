
export default class Card {
    constructor(
        data,
        templateSelector,
        clickImageHandle,
        userId,
        like,
        dislike,
        deleteCard
    ) {
        this._templateSelector = templateSelector
        this._clickImageHandle = clickImageHandle
        this._userId = userId
        this._like = like
        this._dislike = dislike
        this._deleteCard = deleteCard
        this._likes = data.likes
        this._id = data._id
        this._name = data.name
        this._link = data.link
        this._ownerId = data.owner._id
    }

    like() {
        this._likeButton.classList.add('card__like-button_active')
    }

    dislike() {
        this._likeButton.classList.remove("card__like-button_active")
    }

    _userLiked() {
        this._likes.forEach((elementId) => {
            if (elementId._id === this._userId) {
                this.like()
            } else {
                this.dislike()
            }
        })
    }

    likesCount(res) {
        this._likesCount.textContent = `${res.likes.length}`
    }

    remove() {
        this._cardElement.remove()
    }

    generateCard = () => {
        const template = document.querySelector(this._templateSelector)
        if (template) {
            const card = template.content.querySelector(".card")
            if (card) {
                this._cardElement = card.cloneNode(true)
            } else console.log("В классе Card не найден .card!")
        } else
            console.log("В классе Card не найден " + this._templateSelector + "!")

        this._likeButton = this._cardElement.querySelector(".card__like-button")

        // Устанавливаю счетчик для подсчета лайков
        this._likesCount = this._cardElement.querySelector(".card__count-like")
        this._likesCount.textContent = this._likes.length
        this._deleteButtonTrash = this._cardElement.querySelector(".card__delete")
        if (this._ownerId !== this._userId) {
            this._deleteButtonTrash.remove()
        }

        this._imageElementMask = this._cardElement.querySelector(".card__img")
        this._imageElementMask.src = this._link
        this._imageElementMask.alt = this._name
        this._cardElement.querySelector(".card__text").textContent = this._name

        this._setEventListeners()
        this._userLiked()

        return this._cardElement
    }

    _setEventListeners() {
        this._likeButton.addEventListener("click", () => {
            if (this._likeButton.classList.contains("card__like-button_active")) {
                this._dislike()
            } else {
                this._like()
            }
        })
        this._deleteButtonTrash.addEventListener("click", () => {
            this._deleteCard(this._id)
        })
        this._imageElementMask.addEventListener("click", () => {
            this._clickImageHandle(this._name, this._link)
        })
    }
}