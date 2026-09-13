/* Tela de checkout. Carregue loja.js antes deste arquivo. */

var itens = [];
var totais = null;

document.addEventListener('DOMContentLoaded', function () {
  ligarMenu();

  itens = lerCarrinho();
  totais = calcularTotais(itens, lerCupom());

  desenharResumo();
  preencherEntrega();
  ligarMascaras();
  ligarPagamento();

  document.getElementById('formCheckout').addEventListener('submit', enviarPedido);
});

/* Mostra os produtos e os totais na coluna da direita */
function desenharResumo() {
  var html = '';

  for (var i = 0; i < itens.length; i++) {
    var produto = buscarProduto(itens[i].id);
    if (!produto) continue;

    html = html +
      '<li class="resumo__item">' +
        '<img class="resumo__imagem" src="' + produto.imagem + '" alt="' + produto.nome + '">' +
        '<span class="resumo__nome">' + produto.nome + ' <strong>x' + itens[i].quantidade + '</strong></span>' +
        '<span class="resumo__valor">' + formatarPreco(produto.preco * itens[i].quantidade) + '</span>' +
      '</li>';
  }

  if (html === '') html = '<li class="texto-apoio">Nenhum produto no carrinho.</li>';

  document.getElementById('resumoItens').innerHTML = html;
  escrever('resumoSubtotal', formatarPreco(totais.subtotal));
  escrever('resumoFrete', textoFrete(totais.frete));
  escrever('resumoDesconto', textoDesconto(totais.desconto));
  escrever('resumoTotal', formatarPreco(totais.total));
}

/* Reaproveita o CEP calculado na tela do carrinho */
function preencherEntrega() {
  var entrega = lerEntrega();
  if (entrega.cep === '') return;

  document.getElementById('cep').value = entrega.cep;
  escrever('detalhePrazo', entrega.prazo + ' dias úteis após a confirmação');
}

/* Formata os campos enquanto o usuario digita */
function ligarMascaras() {
  aplicarMascara('telefone', '(##) #####-####');
  aplicarMascara('cpf', '###.###.###-##');
  aplicarMascara('cep', '#####-###');
  aplicarMascara('cartaoNumero', '#### #### #### ####');
  aplicarMascara('cartaoValidade', '##/##');
  aplicarMascara('cartaoCvv', '###');
}

/* Destaca a opcao marcada e mostra os campos do cartao quando preciso */
function ligarPagamento() {
  var opcoes = document.querySelectorAll('input[name="pagamento"]');

  for (var i = 0; i < opcoes.length; i++) {
    opcoes[i].addEventListener('change', function () {
      // Tira o destaque de todas e devolve so para a opcao clicada
      for (var j = 0; j < opcoes.length; j++) {
        opcoes[j].parentNode.className = 'opcao-pagamento';
      }
      this.parentNode.className = 'opcao-pagamento opcao-pagamento--marcada';

      mostrar('camposCartao', this.value === 'Cartão de crédito');
    });
  }
}

/* Devolve a forma de pagamento marcada */
function pagamentoEscolhido() {
  var opcoes = document.querySelectorAll('input[name="pagamento"]');

  for (var i = 0; i < opcoes.length; i++) {
    if (opcoes[i].checked) return opcoes[i].value;
  }
  return '';
}


/* ---------- Conferencia dos campos ---------- */

/* Deixa o campo vermelho e escreve a mensagem embaixo dele */
function erroNoCampo(id, mensagem) {
  var campo = document.getElementById(id);
  campo.className = 'campo__entrada campo__entrada--invalido';
  campo.parentNode.querySelector('.campo__erro').textContent = mensagem;
}

/* Apaga os erros que estavam na tela */
function limparErros() {
  var campos = document.querySelectorAll('.campo__entrada');
  for (var i = 0; i < campos.length; i++) {
    campos[i].className = 'campo__entrada';
  }

  var erros = document.querySelectorAll('.campo__erro');
  for (var j = 0; j < erros.length; j++) {
    erros[j].textContent = '';
  }
}

/* Confere se o campo tem pelo menos a quantidade de letras pedida */
function conferirTexto(id, minimo, mensagem) {
  if (valorDoCampo(id).length >= minimo) return true;

  erroNoCampo(id, mensagem);
  return false;
}

/* Confere se o campo tem a quantidade exata de numeros */
function conferirNumeros(id, quantidade, mensagem) {
  if (somenteNumeros(valorDoCampo(id)).length === quantidade) return true;

  erroNoCampo(id, mensagem);
  return false;
}

/* Confere se o e-mail tem @ e um ponto depois do @ */
function conferirEmail(id, mensagem) {
  var texto = valorDoCampo(id);
  var arroba = texto.indexOf('@');
  var ponto = texto.lastIndexOf('.');

  if (arroba > 0 && ponto > arroba + 1 && ponto < texto.length - 1) return true;

  erroNoCampo(id, mensagem);
  return false;
}

/* Confere o formulario inteiro */
function formularioValido() {
  var ok = true;

  // Dados pessoais
  if (!conferirTexto('nome', 5, 'Informe o nome completo.')) ok = false;
  if (!conferirEmail('email', 'Informe um e-mail válido.')) ok = false;
  if (!conferirNumeros('telefone', 11, 'Informe o DDD e o número.')) ok = false;
  if (!conferirNumeros('cpf', 11, 'O CPF precisa ter 11 números.')) ok = false;

  // Endereco de entrega
  if (!conferirNumeros('cep', 8, 'O CEP precisa ter 8 números.')) ok = false;
  if (!conferirTexto('numero', 1, 'Informe o número.')) ok = false;
  if (!conferirTexto('endereco', 3, 'Informe a rua.')) ok = false;
  if (!conferirTexto('bairro', 2, 'Informe o bairro.')) ok = false;
  if (!conferirTexto('cidade', 2, 'Informe a cidade.')) ok = false;
  if (!conferirTexto('estado', 2, 'Escolha o estado.')) ok = false;

  // Cartao: so e conferido quando essa forma de pagamento esta marcada
  if (pagamentoEscolhido() === 'Cartão de crédito') {
    if (!conferirNumeros('cartaoNumero', 16, 'O cartão precisa ter 16 números.')) ok = false;
    if (!conferirTexto('cartaoNome', 3, 'Informe o nome do cartão.')) ok = false;
    if (!conferirNumeros('cartaoValidade', 4, 'Use o formato MM/AA.')) ok = false;
    if (!conferirNumeros('cartaoCvv', 3, 'Informe o código de segurança.')) ok = false;
  }

  return ok;
}


/* ---------- Envio do pedido ---------- */

/* Troca o formulario pela tela de pedido confirmado */
function mostrarConfirmacao() {
  var pagamento = pagamentoEscolhido();
  if (pagamento === 'Cartão de crédito') {
    pagamento = pagamento + ' em ' + valorDoCampo('parcelas') + 'x';
  }

  var endereco = valorDoCampo('endereco') + ', ' + valorDoCampo('numero') + ' - ' +
    valorDoCampo('bairro') + ', ' + valorDoCampo('cidade') + '/' + valorDoCampo('estado');

  // O complemento so entra no endereco se tiver sido preenchido
  if (valorDoCampo('complemento') !== '') {
    endereco = endereco + ' (' + valorDoCampo('complemento') + ')';
  }

  escrever('nomeCliente', valorDoCampo('nome'));
  escrever('numeroPedido', 'Pedido SB-' + (Math.floor(Math.random() * 900000) + 100000));
  escrever('resumoPagamento', pagamento);
  escrever('resumoEndereco', endereco);
  escrever('resumoValorFinal', formatarPreco(totais.total));

  mostrar('areaCheckout', false);
  mostrar('pedidoConfirmado', true);

  // A barra de etapas avanca para a etapa final
  document.getElementById('passoDois').className = 'passos__item';
  document.getElementById('passoTres').className = 'passos__item passos__item--ativo';

  // O pedido foi fechado, entao o carrinho e esvaziado
  salvarCarrinho([]);
  salvarCupom('');

  window.scrollTo(0, 0);
}

/* Confere os campos e fecha o pedido */
function enviarPedido(evento) {
  evento.preventDefault();
  limparErros();

  if (itens.length === 0) {
    escrever('erroGeral', 'Seu carrinho está vazio. Volte e escolha um produto.');
    return;
  }

  if (!formularioValido()) {
    escrever('erroGeral', 'Confira os campos destacados acima.');
    return;
  }

  mostrarConfirmacao();
}
