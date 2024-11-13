const template = document.createElement('template')
template.innerHTML = `<p>testar</p>`



export class MovingBox extends HTMLElement {

    #container

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))




        this.#container = this.shadowRoot.querySelector('#container')


}


attributeChangedCallback(name, oldValue, newValue) {}

connectedCallback() {
    console.log('connected')
}

disconnectedCallback() {}

}