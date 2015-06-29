var BotaoLegal = Object.create(HTMLElement.prototype)

BotaoLegal.createdCallback = function() {
  this.message = this.getAttribute('message') || "Meu Botao Legal"

  if (this.attributes.background) {
    this.style.background = this.getAttribute('background')
  }

  if (this.attributes.color) {
    this.style.color = this.getAttribute('color')
  }

  if (this.attributes['border-color']) {
    this.style.borderColor = this.getAttribute('border-color')
  }

  if (this.attributes.size) {
    var size = this.getAttribute('size')
    if (size === 'big') {
      this.style.fontSize = '100px'
    }
  }

  this.addEventListener('click', function() {
    alert(this.message)
  })
}


document.registerElement('botao-legal', {
  prototype: BotaoLegal
})
