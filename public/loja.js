/* Funcoes usadas pelas telas de carrinho e checkout.
   Carregue este arquivo antes de carrinho.js e checkout.js. */

/* Catalogo da loja. Em um projeto real viria do banco de dados. */
var PRODUTOS = [
  {
    id: 'st3-open',
    nome: 'E-bike ST3 Open',
    categoria: 'Bicicletas Eletricas',
    imagem: '/CSS/Images/bike.png',
    preco: 12900.00,
    precoAntigo: 14500.00
  },
  {
    id: 'st2',
    nome: 'E-bike ST2 Urbana',
    categoria: 'Bicicletas Eletricas',
    imagem: '/CSS/Images/st2.png',
    preco: 9750.00,
    precoAntigo: 0
  },
  {
    id: 'display',
    nome: 'Display Softbyke Matrix',
    categoria: 'Pecas e Componentes',
    imagem: '/CSS/Images/display.webp',
    preco: 459.00,
    precoAntigo: 0
  },
  {
    id: 'kit-sos',
    nome: 'Kit SOS Pedal',
    categoria: 'Manutencao e Reparos',
    imagem: '/CSS/Images/roda.jpg',
    preco: 189.90,
    precoAntigo: 0
  }
];

/* Cupons aceitos. Um desconta porcentagem, o outro desconta reais. */
var CUPONS = {
  'SOFTBYKE10': { porcentagem: 10, reais: 0, texto: '10% de desconto' },
  'PEDAL50': { porcentagem: 0, reais: 50, texto: 'R$ 50,00 de desconto' }
};

var FRETE = 49.90;
var FRETE_GRATIS_ACIMA_DE = 5000.00;


/* ---------- Dados guardados no navegador ---------- */

/* Le o carrinho. Na primeira visita monta um carrinho de exemplo. */
function lerCarrinho() {
  var texto = localStorage.getItem('softbyke_carrinho');
  if (texto) return JSON.parse(texto);

  var exemplo = [
    { id: 'st3-open', quantidade: 1 },
    { id: 'display', quantidade: 1 },
    { id: 'kit-sos', quantidade: 2 }
  ];
  salvarCarrinho(exemplo);
  return exemplo;
}

function salvarCarrinho(itens) {
  localStorage.setItem('softbyke_carrinho', JSON.stringify(itens));
}

function lerCupom() {
  return localStorage.getItem('softbyke_cupom') || '';
}

function salvarCupom(codigo) {
  localStorage.setItem('softbyke_cupom', codigo);
}

function lerEntrega() {
  return {
    cep: localStorage.getItem('softbyke_cep') || '',
    prazo: localStorage.getItem('softbyke_prazo') || ''
  };
}

function salvarEntrega(cep, prazo) {
  localStorage.setItem('softbyke_cep', cep);
  localStorage.setItem('softbyke_prazo', prazo);
}


/* ---------- Produtos e calculos ---------- */

/* Procura um produto do catalogo pelo id. */
function buscarProduto(id) {
  for (var i = 0; i < PRODUTOS.length; i++) {
    if (PRODUTOS[i].id === id) return PRODUTOS[i];
  }
  return null;
}

/* Calcula pecas, subtotal, frete, desconto e total do carrinho. */
function calcularTotais(itens, codigoCupom) {
  var pecas = 0;
  var subtotal = 0;

  for (var i = 0; i < itens.length; i++) {
    var produto = buscarProduto(itens[i].id);
    if (produto) {
      pecas = pecas + itens[i].quantidade;
      subtotal = subtotal + produto.preco * itens[i].quantidade;
    }
  }

  // Frete gratis acima do valor definido. Carrinho vazio nao tem frete.
  var frete = FRETE;
  if (subtotal === 0 || subtotal >= FRETE_GRATIS_ACIMA_DE) frete = 0;

  // Desconto do cupom, nunca maior que o valor dos produtos
  var desconto = 0;
  var cupom = CUPONS[codigoCupom];
  if (cupom) {
    desconto = subtotal * cupom.porcentagem / 100 + cupom.reais;
    if (desconto > subtotal) desconto = subtotal;
  }

  return {
    pecas: pecas,
    subtotal: subtotal,
    frete: frete,
    desconto: desconto,
    total: subtotal + frete - desconto
  };
}

/* Adiciona um produto ao carrinho.
   As telas de e-bikes e acessorios podem chamar assim:
   adicionarAoCarrinho('st2', 1); */
function adicionarAoCarrinho(id, quantidade) {
  if (!buscarProduto(id)) return false;
  if (!quantidade || quantidade < 1) quantidade = 1;

  var itens = lerCarrinho();

  // Se o produto ja esta no carrinho, apenas soma a quantidade
  for (var i = 0; i < itens.length; i++) {
    if (itens[i].id === id) {
      itens[i].quantidade = itens[i].quantidade + quantidade;
      salvarCarrinho(itens);
      return true;
    }
  }

  itens.push({ id: id, quantidade: quantidade });
  salvarCarrinho(itens);
  return true;
}


/* ---------- Textos ---------- */

/* Numero para texto no formato R$ 1.234,56 */
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/* Frete zero aparece como "Gratis" */
function textoFrete(valor) {
  if (valor === 0) return 'Gratis';
  return formatarPreco(valor);
}

/* O sinal de menos so aparece quando existe desconto */
function textoDesconto(valor) {
  if (valor === 0) return formatarPreco(0);
  return '- ' + formatarPreco(valor);
}

/* Deixa so os numeros de um texto */
function somenteNumeros(texto) {
  return texto.replace(/[^0-9]/g, '');
}


/* ---------- Atalhos de tela ---------- */

/* Escreve um texto dentro de um elemento */
function escrever(id, texto) {
  document.getElementById(id).textContent = texto;
}

/* Mostra ou esconde um elemento */
function mostrar(id, visivel) {
  var elemento = document.getElementById(id);
  if (visivel) {
    elemento.classList.remove('escondido');
  } else {
    elemento.classList.add('escondido');
  }
}

/* Devolve o que foi digitado em um campo, sem espacos nas pontas */
function valorDoCampo(id) {
  return document.getElementById(id).value.trim();
}

/* Escreve uma mensagem verde (certo) ou vermelha (erro) */
function avisar(id, texto, certo) {
  var elemento = document.getElementById(id);
  elemento.textContent = texto;

  if (certo) {
    elemento.className = 'aviso aviso--ok';
  } else {
    elemento.className = 'aviso aviso--erro';
  }
}

/* Monta o texto seguindo o modelo, onde cada # vira um numero digitado.
   Exemplo: formatarComModelo('12345678', '#####-###') vira '12345-678' */
function formatarComModelo(texto, modelo) {
  var numeros = somenteNumeros(texto);
  var saida = '';
  var n = 0;

  for (var i = 0; i < modelo.length; i++) {
    if (n >= numeros.length) break;

    if (modelo.charAt(i) === '#') {
      saida = saida + numeros.charAt(n);
      n = n + 1;
    } else {
      saida = saida + modelo.charAt(i);
    }
  }

  return saida;
}

/* Formata o campo enquanto o usuario digita */
function aplicarMascara(id, modelo) {
  var campo = document.getElementById(id);

  campo.addEventListener('input', function () {
    campo.value = formatarComModelo(campo.value, modelo);
  });
}

/* Abre e fecha o menu do topo */
function ligarMenu() {
  var botao = document.getElementById('navToggle');
  var caixa = document.getElementById('navbar');

  botao.addEventListener('click', function () {
    var aberto = caixa.classList.toggle('is-open');
    botao.setAttribute('aria-expanded', aberto);
  });
}
