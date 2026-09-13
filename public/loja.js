/* Funcoes usadas pelas telas de e-bikes, acessorios, carrinho e checkout.
   Carregue este arquivo antes de produtos.js, carrinho.js e checkout.js. */

/* Catalogo da loja. Em um projeto real viria do banco de dados.
   tipo: 'ebike' ou 'acessorio'. A categoria e usada nos filtros das telas. */
var PRODUTOS = [

  /* ---------- E-bikes ---------- */
  {
    id: 'st3-open',
    nome: 'Softbyke ST3 Open',
    tipo: 'ebike',
    categoria: 'Urbana',
    descricao: 'Quadro aberto, motor silencioso e bateria integrada. Feita para o trajeto diário na cidade.',
    imagem: '/CSS/Images/bike.png',
    preco: 12900.00,
    precoAntigo: 14500.00,
    motor: '250 W',
    bateria: '487 Wh',
    autonomia: '60 km',
    peso: '21 kg'
  },
  {
    id: 'st2',
    nome: 'Softbyke ST2 Urbana',
    tipo: 'ebike',
    categoria: 'Urbana',
    descricao: 'A porta de entrada da linha. Leve, com troca automática de marchas e farol integrado.',
    imagem: '/CSS/Images/st2.png',
    preco: 9750.00,
    precoAntigo: 0,
    motor: '250 W',
    bateria: '375 Wh',
    autonomia: '45 km',
    peso: '19 kg'
  },
  {
    id: 'tero-30',
    nome: 'Turbo Tero 3.0',
    tipo: 'ebike',
    categoria: 'Urbana',
    descricao: 'Pneus largos e suspensão dianteira. Encara asfalto, paralelepípedo e estrada de terra.',
    imagem: '/CSS/Images/produtos/tero-30.jpg',
    preco: 18990.00,
    precoAntigo: 0,
    motor: '250 W',
    bateria: '530 Wh',
    autonomia: '90 km',
    peso: '22 kg'
  },
  {
    id: 'vado-30-igh',
    nome: 'Turbo Vado 3.0 IGH',
    tipo: 'ebike',
    categoria: 'Urbana',
    descricao: 'Câmbio interno no cubo e correia no lugar da corrente: quase nenhuma manutenção.',
    imagem: '/CSS/Images/produtos/vado-30-igh.jpg',
    preco: 22990.00,
    precoAntigo: 0,
    motor: '250 W',
    bateria: '530 Wh',
    autonomia: '90 km',
    peso: '24 kg'
  },
  {
    id: 'levo-4-alloy',
    nome: 'Turbo Levo 4 Alloy',
    tipo: 'ebike',
    categoria: 'Montanha',
    descricao: 'Quadro de alumínio e suspensão completa. A entrada da linha de montanha.',
    imagem: '/CSS/Images/produtos/levo-4-alloy.jpg',
    preco: 49990.00,
    precoAntigo: 0,
    motor: '810 W',
    bateria: '840 Wh',
    autonomia: '110 km',
    peso: '24 kg'
  },
  {
    id: 'levo-4-comp',
    nome: 'Turbo Levo 4 Comp',
    tipo: 'ebike',
    categoria: 'Montanha',
    descricao: 'Mesmo motor da linha topo, com componentes preparados para trilha pesada.',
    imagem: '/CSS/Images/produtos/levo-4-comp.jpg',
    preco: 75990.00,
    precoAntigo: 0,
    motor: '810 W',
    bateria: '840 Wh',
    autonomia: '110 km',
    peso: '23 kg'
  },
  {
    id: 'levo-4-expert',
    nome: 'Turbo Levo 4 Expert',
    tipo: 'ebike',
    categoria: 'Montanha',
    descricao: 'Quadro de carbono e suspensão regulável. Torque de 105 Nm para subidas longas.',
    imagem: '/CSS/Images/produtos/levo-4-expert.jpg',
    preco: 87990.00,
    precoAntigo: 0,
    motor: '810 W',
    bateria: '840 Wh',
    autonomia: '115 km',
    peso: '22 kg'
  },
  {
    id: 'sw-levo-4',
    nome: 'S-Works Turbo Levo 4',
    tipo: 'ebike',
    categoria: 'Montanha',
    descricao: 'O topo da linha: 111 Nm de torque, carbono FACT e os melhores componentes do catálogo.',
    imagem: '/CSS/Images/produtos/sw-levo-4.jpg',
    preco: 134990.00,
    precoAntigo: 0,
    motor: '850 W',
    bateria: '840 Wh',
    autonomia: '120 km',
    peso: '21 kg'
  },

  /* ---------- Acessorios: seguranca ---------- */
  {
    id: 'capacete-chamonix',
    nome: 'Capacete Chamonix 3',
    tipo: 'acessorio',
    categoria: 'Segurança',
    descricao: 'Capacete urbano com ajuste rápido e boa ventilação. Tamanho único regulável.',
    imagem: '/CSS/Images/produtos/capacete-chamonix.jpg',
    preco: 245.00,
    precoAntigo: 0
  },
  {
    id: 'capacete-align',
    nome: 'Capacete Align II',
    tipo: 'acessorio',
    categoria: 'Segurança',
    descricao: 'Modelo leve do dia a dia, com tecnologia MIPS contra impactos rotacionais.',
    imagem: '/CSS/Images/produtos/capacete-align.jpg',
    preco: 349.00,
    precoAntigo: 399.00
  },
  {
    id: 'capacete-loma',
    nome: 'Capacete Loma',
    tipo: 'acessorio',
    categoria: 'Segurança',
    descricao: 'Casco compacto e leve, com espuma de alta densidade e acabamento fosco.',
    imagem: '/CSS/Images/produtos/capacete-loma.jpg',
    preco: 690.00,
    precoAntigo: 0
  },
  {
    id: 'capacete-ambush',
    nome: 'Capacete Ambush 3',
    tipo: 'acessorio',
    categoria: 'Segurança',
    descricao: 'Proteção estendida na nuca e viseira ajustável. Indicado para trilha.',
    imagem: '/CSS/Images/produtos/capacete-ambush.jpg',
    preco: 1690.00,
    precoAntigo: 0
  },

  /* ---------- Acessorios: conforto e utilitarios ---------- */
  {
    id: 'selim-cup-gel',
    nome: 'Selim Cup Gel',
    tipo: 'acessorio',
    categoria: 'Conforto',
    descricao: 'Selim largo com camada de gel. Pensado para quem pedala sentado na cidade.',
    imagem: '/CSS/Images/produtos/selim-cup-gel.jpg',
    preco: 149.00,
    precoAntigo: 0
  },
  {
    id: 'selim-power-evo',
    nome: 'Selim Power EVO Comp',
    tipo: 'acessorio',
    categoria: 'Conforto',
    descricao: 'Bico curto e canal central aliviado, para pedaladas longas sem desconforto.',
    imagem: '/CSS/Images/produtos/selim-power-evo.jpg',
    preco: 690.00,
    precoAntigo: 0
  },
  {
    id: 'garrafa-purist',
    nome: 'Garrafa Purist MoFlo 650 ml',
    tipo: 'acessorio',
    categoria: 'Conforto',
    descricao: 'Revestimento interno que não guarda cheiro nem sabor. Bico de alto fluxo.',
    imagem: '/CSS/Images/produtos/garrafa-purist.jpg',
    preco: 59.00,
    precoAntigo: 0
  },
  {
    id: 'suporte-garrafa',
    nome: 'Suporte de Garrafa Rib Cage II',
    tipo: 'acessorio',
    categoria: 'Conforto',
    descricao: 'Suporte leve que segura firme mesmo em piso irregular. Parafusos inclusos.',
    imagem: '/CSS/Images/produtos/suporte-garrafa.jpg',
    preco: 50.00,
    precoAntigo: 0
  },

  /* ---------- Acessorios: manutencao e reparos ---------- */
  {
    id: 'kit-sos',
    nome: 'Kit SOS Pedal',
    tipo: 'acessorio',
    categoria: 'Manutenção',
    descricao: 'Câmara de ar, espátulas e cartucho de CO2 para resolver um furo na rua.',
    imagem: '/CSS/Images/roda.jpg',
    preco: 189.90,
    precoAntigo: 0
  },
  {
    id: 'pneu-butcher',
    nome: 'Pneu Butcher Grid Gravity T9',
    tipo: 'acessorio',
    categoria: 'Manutenção',
    descricao: 'Cravos altos e carcaça reforçada. Feito para trilha técnica e piso solto.',
    imagem: '/CSS/Images/produtos/pneu-butcher.jpg',
    preco: 790.00,
    precoAntigo: 0
  },
  {
    id: 'pneu-cotton',
    nome: 'Pneu Cotton TLR',
    tipo: 'acessorio',
    categoria: 'Manutenção',
    descricao: 'Flanco em algodão e rolagem leve no asfalto. Compatível com tubeless.',
    imagem: '/CSS/Images/produtos/pneu-cotton.jpg',
    preco: 1090.00,
    precoAntigo: 1290.00
  },

  /* ---------- Acessorios: componentes ---------- */
  {
    id: 'display',
    nome: 'Display Softbyke Matrix',
    tipo: 'acessorio',
    categoria: 'Componentes',
    descricao: 'Painel com velocidade, bateria e nível de assistência. Visível sob sol forte.',
    imagem: '/CSS/Images/display.webp',
    preco: 459.00,
    precoAntigo: 0
  },
  {
    id: 'cockpit-roval',
    nome: 'Cockpit Roval Control',
    tipo: 'acessorio',
    categoria: 'Componentes',
    descricao: 'Guidão e mesa em peça única, mais rígido e com menos parafusos para soltar.',
    imagem: '/CSS/Images/produtos/cockpit-roval.jpg',
    preco: 3490.00,
    precoAntigo: 0
  },
  {
    id: 'roda-roval',
    nome: 'Roda Roval Control SL VI 350',
    tipo: 'acessorio',
    categoria: 'Componentes',
    descricao: 'Aro de carbono e cubo de engate rápido. Reduz peso na parte que mais importa.',
    imagem: '/CSS/Images/produtos/roda-roval.jpg',
    preco: 7000.00,
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

/* Devolve os produtos de um tipo: 'ebike' ou 'acessorio'.
   Passe uma categoria para filtrar ainda mais, ou 'todas' para trazer tudo. */
function listarProdutos(tipo, categoria) {
  var lista = [];

  for (var i = 0; i < PRODUTOS.length; i++) {
    if (PRODUTOS[i].tipo !== tipo) continue;
    if (categoria && categoria !== 'todas' && PRODUTOS[i].categoria !== categoria) continue;
    lista.push(PRODUTOS[i]);
  }

  return lista;
}

/* Quantas pecas existem no carrinho hoje. Usado no numero do menu. */
function pecasNoCarrinho() {
  return calcularTotais(lerCarrinho(), '').pecas;
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
  if (valor === 0) return 'Grátis';
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
