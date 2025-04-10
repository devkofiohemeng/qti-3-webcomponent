import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

class QtiPlayerElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' }) // Attach Shadow DOM
  }

  connectedCallback() {
    const mountPoint = document.createElement('div')
    this.shadowRoot.appendChild(mountPoint)

    // Clone all <style> tags into shadow DOM
    const styleNodes = document.querySelectorAll('style')
    styleNodes.forEach(style => {
      this.shadowRoot.appendChild(style.cloneNode(true))
    })

    // Mount Vue into shadow root
    new Vue({
      render: h => h(App)
    }).$mount(mountPoint)
  }
}

customElements.define('qti-player', QtiPlayerElement)
