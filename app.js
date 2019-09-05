class WebComponentButton extends HTMLElement {
    constructor() {
        super()
        this.addEventListener('click', () => {
          console.log('click')
        })
    }
}

window.customElements.define(
    'app-button',
    WebComponentButton
)
