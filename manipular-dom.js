/* da forma abaixo toda hora teremos que alterar o seletor para conseguirmos manipula-lo, para isso existem as funções construtoras.

const Dom = {
  seletor: "li",
  Element() {
    return document.querySelector(this.seletor) //precisa do this para conseguir pegar o seletor
  },
  ativo() {
    this.element(),classList.add("ativo");
  }
}

Dom.ativo(); //add ativo ao li
Dom.seletor = "ul";
Dom.ativo(); //add ativo ao ul

*/

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor) //precisa do this para conseguir pegar o seletor
  },
  this.ativo = function() {
    this.element(),classList.add("ativo");
  }
}

const li = new Dom ("li");

// se colocarmos li.element() ele dará o primeiro li

// se colocarmos o li.ativar() ele ativa a class no li

// poderiamos fazer varios novos objetos, li, ul, section, main, li:last-child...
