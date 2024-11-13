// Template
const template = document.createElement('template')
template.innerHTML = `
<div id="container">
    <button class="moveBtnInit">Move</button>

</div>
`



export class MovingBox extends HTMLElement {

    #container
    #button
    #counter = 0
    #abortController

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

        // Load CSS file and append it to the shadow DOM
        const linkElement = document.createElement('link')
        linkElement.setAttribute('rel', 'stylesheet')
        linkElement.setAttribute('href', './components/moving-box/movingBox.css')
        this.shadowRoot.prepend(linkElement)

        // Get the elements

        this.#container = this.shadowRoot.querySelector('#container')
        this.#button = this.shadowRoot.querySelector('.moveBtnInit')
}


attributeChangedCallback(name, oldValue, newValue) {}

connectedCallback() {
    this.#abortController = new AbortController()
    const signal = this.#abortController.signal

    
    this.#button.addEventListener('click', () => {       

        const interval = setInterval(() => {
            this.#counter++
            this.#button.classList.remove('moveBtnInit')

            if(this.#button.classList.contains('left')) {
                this.#button.classList.remove('left')
                this.#button.classList.add('right')
            } else {
                this.#button.classList.remove('right')
                this.#button.classList.add('left')
            }
            if(this.#counter === 5) {
                clearInterval(interval)
                this.#counter = 0
            }

        }, 500)
    }, { signal })



}

disconnectedCallback() {
    if(this.#abortController) {
        this.#abortController.abort()
    }
}

}