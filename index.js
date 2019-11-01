const template = document.createElement('template')
template.innerHTML = `
  <style>
  svg {
    width: 20px;
  }
  svg path {
    fill: red;
  }
  </style>
  <div class="container">
    <img class="svg" src="" />
  </div>
`
class Button extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    this.selectors()
    // this.bell.getAttribute('src')
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'img-svg') {
      converToSvg(this.bell, newVal)
    }
  }

  static get observedAttributes() {
    return ['img-svg']
  }

  selectors() {
    this.bell = this._shadowRoot.querySelector('img.svg')
  }
}
window.customElements.define('my-button', Button)
