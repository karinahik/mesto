export default class UserInfo {
    constructor({ titleSelector, subtitleSelector }) {
        this._title = document.querySelector(titleSelector)
        this._subtitle = document.querySelector(subtitleSelector)
    }

    getUserInfo() {
        return {
            title: this._title.textContent,
            subtitle: this._subtitle.textContent,
        }
    }

    setUserInfo(title, subtitle) {
        this._title.textContent = title
        this._subtitle.textContent = subtitle
    }
}