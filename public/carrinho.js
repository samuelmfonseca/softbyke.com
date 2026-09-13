/* Tela do carrinho. Carregue loja.js antes deste arquivo. */

var itens = [];
var cupom = '';

document.addEventListener('DOMContentLoaded', function () {
  ligarMenu();

  itens = lerCarrinho();
  cupom = lerCupom();

  aplicarMascara('campoCep', '#####-###');
  ligarEventos();
  mostrarCupomSalvo();
  desenhar();
});

/* Monta as linhas da tabela e atualiza os totais */
function desenhar() {
  var html = '';

  for (var i = 0; i < itens.length; i++) {
    var produto = buscarProduto(itens[i].id);
    if (produto) html = html + montarLinha(produto, itens[i].quantidade);
  }

  document.getElementById('listaItens').innerHTML = html;

  // Com o carrinho vazio a tabela some e aparece a mensagem
  mostrar('areaTabela', itens.length > 0);
  mostrar('carrinhoVazio', itens.length === 0);

  var totais = calcularTotais(itens, cupom);
  escrever('valorSubtotal', formatarPreco(totais.subtotal));
  escrever('valorFrete', textoFrete(totais.frete));
  escrever('valorDesconto', textoDesconto(totais.desconto));
  escrever('valorTotal', formatarPreco(totais.total));
  escrever('totalPecas', totais.pecas);
}

/* Monta o HTML de uma linha da tabela */
function montarLinha(produto, quantidade) {
  var promocao = '';

  // So mostra o preco riscado quando o produto esta em promocao
  if (produto.precoAntigo > 0) {
    promocao = '<div class="preco-antigo"><s>' + formatarPreco(produto.precoAntigo) + '</s></div>';
  }

  return '<tr>' +
    '<td>' +
      '<div class="produto-celula">' +
        '<img class="produto-celula__imagem" src="' + produto.imagem + '" alt="' + produto.nome + '">' +
        '<div>' +
          '<div class="produto-celula__nome">' + produto.nome + '</div>' +
          '<div class="produto-celula__categoria">' + produto.categoria + '</div>' +
        '</div>' +
      '</div>' +
    '</td>' +
    '<td class="coluna-numero">' + formatarPreco(produto.preco) + promocao + '</td>' +
    '<td>' +
      '<div class="quantidade">' +
        '<button type="button" class="quantidade__botao" data-acao="menos" data-id="' + produto.id + '">-</button>' +
        '<span class="quantidade__valor">' + quantidade + '</span>' +
        '<button type="button" class="quantidade__botao" data-acao="mais" data-id="' + produto.id + '">+</button>' +
      '</div>' +
    '</td>' +
    '<td class="coluna-numero">' + formatarPreco(produto.preco * quantidade) + '</td>' +
    '<td>' +
      '<button type="button" class="botao-remover" data-acao="remover" data-id="' + produto.id + '">Remover</button>' +
    '</td>' +
  '</tr>';
}

/* Aumenta, diminui ou remove um item do carrinho */
function mudarItem(id, acao) {
  for (var i = 0; i < itens.length; i++) {
    if (itens[i].id !== id) continue;

    if (acao === 'mais') itens[i].quantidade = itens[i].quantidade + 1;
    if (acao === 'menos') itens[i].quantidade = itens[i].quantidade - 1;

    // Sai da lista quando pedem para remover ou quando zera a quantidade
    if (acao === 'remover' || itens[i].quantidade < 1) itens.splice(i, 1);
    break;
  }

  salvarCarrinho(itens);
  desenhar();
}

/* Mostra o cupom que ja estava aplicado */
function mostrarCupomSalvo() {
  if (!CUPONS[cupom]) return;

  document.getElementById('campoCupom').value = cupom;
  avisar('avisoCupom', 'Cupom aplicado: ' + CUPONS[cupom].texto, true);
}

/* Aplica o cupom digitado */
function aplicarCupom(evento) {
  evento.preventDefault();
  var codigo = valorDoCampo('campoCupom').toUpperCase();

  if (CUPONS[codigo]) {
    cupom = codigo;
    avisar('avisoCupom', 'Cupom aplicado: ' + CUPONS[codigo].texto, true);
  } else if (codigo === '') {
    cupom = '';
    avisar('avisoCupom', 'Cupom removido.', false);
  } else {
    cupom = '';
    avisar('avisoCupom', 'Cupom invalido.', false);
  }

  salvarCupom(cupom);
  desenhar();
}

/* Calcula o prazo de entrega pelo CEP */
function calcularEntrega(evento) {
  evento.preventDefault();
  var cep = valorDoCampo('campoCep');

  if (somenteNumeros(cep).length !== 8) {
    avisar('avisoCep', 'Digite um CEP com 8 numeros.', false);
    mostrar('listaFrete', false);
    return;
  }

  // Regra do projeto: CEP comecando de 0 a 3 chega mais rapido
  var dias = 8;
  if (cep.charAt(0) <= '3') dias = 3;

  escrever('prazoPadrao', dias + ' dias uteis');
  mostrar('listaFrete', true);
  avisar('avisoCep', 'Entrega disponivel para o CEP ' + cep + '.', true);

  // Guarda o CEP para preencher o checkout depois
  salvarEntrega(cep, dias);
}

/* Liga os cliques e os envios de formulario da tela */
function ligarEventos() {
  // Um unico clique na tabela atende os botoes de todas as linhas
  document.getElementById('listaItens').addEventListener('click', function (evento) {
    var acao = evento.target.getAttribute('data-acao');
    if (acao) mudarItem(evento.target.getAttribute('data-id'), acao);
  });

  document.getElementById('formCupom').addEventListener('submit', aplicarCupom);
  document.getElementById('formFrete').addEventListener('submit', calcularEntrega);

  // Nao deixa ir para o checkout com o carrinho vazio
  document.getElementById('botaoCheckout').addEventListener('click', function (evento) {
    if (itens.length === 0) {
      evento.preventDefault();
      alert('Adicione um produto antes de ir para o checkout.');
    }
  });
}
