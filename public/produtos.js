/* Telas de venda (e-bikes e acessorios). Carregue loja.js antes deste arquivo.

   A pagina diz qual catalogo mostrar pelo atributo data-tipo do body:
   <body data-tipo="ebike">  ou  <body data-tipo="acessorio"> */

var tipoDaPagina = '';
var categoriaAtual = 'todas';

document.addEventListener('DOMContentLoaded', function () {
  ligarMenu();

  tipoDaPagina = document.body.getAttribute('data-tipo');

  ligarFiltros();
  ligarBotoesDoCarrinho();
  atualizarContadorDoMenu();
  desenharProdutos();
});

/* Monta a grade com os produtos da categoria escolhida */
function desenharProdutos() {
  var lista = listarProdutos(tipoDaPagina, categoriaAtual);
  var html = '';

  for (var i = 0; i < lista.length; i++) {
    html = html + montarCartao(lista[i]);
  }

  document.getElementById('gradeProdutos').innerHTML = html;
  escrever('contadorProdutos', lista.length + ' produtos');
}

/* Monta o HTML do cartao de um produto */
function montarCartao(produto) {
  var selo = '';
  var precoAntigo = '';

  // Produto em promocao ganha selo e preco riscado
  if (produto.precoAntigo > 0) {
    selo = '<span class="produto__selo">Oferta</span>';
    precoAntigo = '<s class="preco-antigo">' + formatarPreco(produto.precoAntigo) + '</s>';
  }

  return '<article class="produto">' +
    '<div class="produto__foto">' +
      selo +
      '<img src="' + produto.imagem + '" alt="' + produto.nome + '" loading="lazy">' +
    '</div>' +
    '<div class="produto__corpo">' +
      '<span class="produto__categoria">' + produto.categoria + '</span>' +
      '<h3 class="produto__nome">' + produto.nome + '</h3>' +
      '<p class="produto__descricao">' + produto.descricao + '</p>' +
      montarFicha(produto) +
      '<div class="produto__precos">' +
        '<strong class="produto__preco">' + formatarPreco(produto.preco) + '</strong>' +
        precoAntigo +
      '</div>' +
      '<span class="produto__parcelas">' + textoParcelas(produto.preco) + '</span>' +
      '<button type="button" class="botao botao--principal botao--largo" data-adicionar="' + produto.id + '">' +
        'Adicionar ao carrinho' +
      '</button>' +
    '</div>' +
  '</article>';
}

/* Ficha rapida com motor, bateria e autonomia. So as e-bikes tem. */
function montarFicha(produto) {
  if (!produto.motor) return '';

  return '<ul class="produto__ficha">' +
    '<li>Motor ' + produto.motor + '</li>' +
    '<li>Bateria ' + produto.bateria + '</li>' +
    '<li>' + produto.autonomia + '</li>' +
  '</ul>';
}

/* Texto do parcelamento, em ate 12 vezes sem juros */
function textoParcelas(preco) {
  return 'ou 12x de ' + formatarPreco(preco / 12) + ' sem juros';
}

/* Troca a categoria mostrada ao clicar em um filtro */
function ligarFiltros() {
  var botoes = document.querySelectorAll('[data-categoria]');

  for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function () {
      // Tira o destaque de todos e devolve so para o botao clicado
      for (var j = 0; j < botoes.length; j++) {
        botoes[j].className = 'filtros__botao';
      }
      this.className = 'filtros__botao filtros__botao--ativo';

      categoriaAtual = this.getAttribute('data-categoria');
      desenharProdutos();
    });
  }
}

/* Um unico clique na grade atende o botao de todos os cartoes */
function ligarBotoesDoCarrinho() {
  document.getElementById('gradeProdutos').addEventListener('click', function (evento) {
    var id = evento.target.getAttribute('data-adicionar');
    if (!id) return;

    adicionarAoCarrinho(id, 1);
    atualizarContadorDoMenu();
    mostrarAvisoDeItem(buscarProduto(id).nome);
  });
}

/* Mostra a barra "produto adicionado" com atalho para o carrinho.
   A barra some sozinha depois de 4 segundos. */
var tempoDoAviso = null;

function mostrarAvisoDeItem(nome) {
  escrever('nomeAdicionado', nome);
  mostrar('barraAdicionado', true);

  clearTimeout(tempoDoAviso);
  tempoDoAviso = setTimeout(function () {
    mostrar('barraAdicionado', false);
  }, 4000);
}

/* Escreve quantas pecas existem no carrinho, ao lado da sacola do menu */
function atualizarContadorDoMenu() {
  var pecas = pecasNoCarrinho();

  escrever('contadorMenu', pecas);
  mostrar('contadorMenu', pecas > 0);
}
