/* Efeitos do card principal da home. Os estilos ficam em style.css. */

var cardPrincipal = null;

document.addEventListener('DOMContentLoaded', function () {
  cardPrincipal = document.querySelector('.cartao-destaque--principal');
  if (!cardPrincipal) return;

  // Titulo se move com a rolagem, so no tablet e desktop
  if (window.innerWidth >= 768) {
    moverTitulo();
    window.addEventListener('scroll', moverTitulo);
  }

  // Brilho que segue o mouse, so no desktop
  if (window.innerWidth >= 1024) {
    cardPrincipal.addEventListener('mousemove', moverBrilho);
  }
});

/* Sobe ou desce o titulo conforme o card passa pela tela */
function moverTitulo() {
  var titulo = cardPrincipal.querySelector('.cartao-destaque__titulo');
  var caixa = cardPrincipal.getBoundingClientRect();

  // Distancia entre o centro do card e o centro da tela
  var distancia = (caixa.top + caixa.height / 2 - window.innerHeight / 2) / caixa.height;

  titulo.style.transform = 'translateY(' + (distancia * 30) + 'px)';
}

/* Leva o brilho do fundo para onde o mouse esta */
function moverBrilho(evento) {
  var fundo = cardPrincipal.querySelector('.cartao-destaque__imagem-fundo');
  var caixa = cardPrincipal.getBoundingClientRect();

  var x = (evento.clientX - caixa.left) / caixa.width * 100;
  var y = (evento.clientY - caixa.top) / caixa.height * 100;

  fundo.style.setProperty('--mouse-x', x + '%');
  fundo.style.setProperty('--mouse-y', y + '%');
}
