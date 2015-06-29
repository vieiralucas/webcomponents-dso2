var botaoLegal = Object.create(HTMLElement.prototype)

botaoLegal.createdCallback = function() {
  this.textContent = "Meu Botão Legal"
}

document.register('botao-legal', {
  prototype: botaoLegal
})
