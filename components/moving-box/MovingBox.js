// Template
const template = document.createElement('template')
template.innerHTML = `
<div id="container">

</div>
`



export class MovingBox extends HTMLElement {

    #container

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

        // Load CSS file and append it to the shadow DOM
        const linkElement = document.createElement('link')
        linkElement.setAttribute('rel', 'stylesheet')
        linkElement.setAttribute('href', './components/moving-box/movingBox.css')
        this.shadowRoot.appendChild(linkElement)

        // Get the container element

        this.#container = this.shadowRoot.querySelector('#container')
}


attributeChangedCallback(name, oldValue, newValue) {}

connectedCallback() {
    this.#container.innerHTML = `<h1>HEJ</h1>`
}

disconnectedCallback() {}

}