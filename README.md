# 🚲 Softbyke.com

Site institucional e e-commerce de e-bikes da Softbyke. Desenvolvido com **Node.js**, **Express** e **HTML/CSS/JS** puro.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas do Site](#rotas-do-site)
- [Páginas e Funcionalidades](#páginas-e-funcionalidades)
- [Guia de Estilo (Design System)](#guia-de-estilo)
- [Como Instalar e Rodar](#como-instalar-e-rodar)
- [Patrocinadores](#patrocinadores)
- [Contribuidores](#contribuidores)

---

## Sobre o Projeto

A **Softbyke** é uma empresa de e-bikes urbanas e dobráveis, com oficinas próprias, serviço de manutenção leva e traz, e uma loja online de acessórios. O site foi projetado para:

- Apresentar as e-bikes ST2 e ST3 open
- Facilitar o agendamento de manutenção
- Vender acessórios e peças
- Divulgar as 3 filiais e o serviço de coleta/entrega

---

## Tecnologias

| Camada | Tecnologia |
|--------|------------|
| Backend | Node.js + Express |
| Frontend | HTML5, CSS3, JavaScript (vanilo) |
| Fontes | Google Fonts — Space Grotesk (títulos), DM Sans (corpo) |
| Ícones | SVG inline |
| CSS | Metodologia BEM (Block Element Modifier) |

---

## Estrutura do Projeto

```
softbyke.com/
├── server.js                    # Servidor Express (rotas)
├── package.json
├── README.md
│
└── public/                      # Arquivos estáticos
    ├── index.html               # Página inicial (Home)
    │
    ├── pages/                   # Páginas internas
    │   ├── e-bikes.html         # Catálogo de e-bikes
    │   ├── acessorios.html      # Loja de acessórios
    │   ├── oficina.html         # Oficinas e filiais
    │   ├── agendamento.html     # Agendamento de manutenção
    │   ├── sobre.html           # Sobre a Softbyke
    │   ├── empresa.html         # Briefing do projeto (menu Empresa)
    │   ├── carrinho.html        # Carrinho de compras
    │   ├── checkout.html        # Finalização de compra
    │   ├── cadastro.html        # Cadastro newsletter
    │   ├── docs.html            # Documentação / Wireframes
    │   └── Template.html        # Template base para novas páginas
    │
    ├── CSS/                     # Folhas de estilo
    │   ├── style.css            # Estilos gerais e variáveis
    │   ├── navbar.css           # Componente Navbar
    │   ├── footer.css           # Componente Rodapé
    │   ├── oficina.css          # Estilos da página Oficina
    │   ├── agendamento.css      # Estilos da página Agendamento
    │   ├── sobre.css            # Estilos da página Sobre
    │   ├── empresa.css          # Estilos da página Empresa
    │   ├── cadastro.css         # Estilos da página Cadastro
    │   ├── carrinho.css         # Estilos do Carrinho
    │   ├── checkout.css         # Estilos do Checkout
    │   ├── loja.css             # Estilos da Loja
    │   ├── produtos.css         # Estilos de Produtos
    │   ├── docs.css             # Estilos da Documentação
    │   ├── patrocinios.css      # Estilos dos Popups de Patrocinadores
    │   │
    │   └── Images/              # Imagens do site
    │       ├── bike.png         # Imagem principal ST3
    │       ├── st2.png          # Imagem ST2
    │       ├── galeria/         # Fotos da galeria (foto01-25.jpg)
    │       ├── produtos/        # Fotos de produtos (capacetes, pneus, etc.)
    │       ├── patrocio-*.png   # Banners de patrocinadores
    │       └── ...              # Outras imagens
    │
    ├── carrinho.js              # Lógica do carrinho
    ├── checkout.js              # Lógica do checkout
    ├── loja.js                  # Lógica da loja
    ├── produtos.js              # Dados dos produtos
    └── s6.js                    # Animações da seção S6
```

---

## Rotas do Site

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | `index.html` | Página inicial com hero, produtos e patrocinadores |
| `/e-bikes` | `e-bikes.html` | Catálogo de e-bikes (ST2, ST3 open) |
| `/acessorios` | `acessorios.html` | Loja de acessórios e peças |
| `/oficinas` | `oficina.html` | Oficinas, filiais e serviço leva e traz |
| `/agendamento` | `agendamento.html` | Formulário de agendamento de manutenção |
| `/sobre` | `sobre.html` | História, valores e contato |
| `/empresa` | `empresa.html` | Briefing do projeto com as 17 perguntas e respostas |
| `/carrinho` | `carrinho.html` | Carrinho de compras |
| `/checkout` | `checkout.html` | Finalização de compra |
| `/cadastro` | `cadastro.html` | Cadastro na newsletter |
| `/docs` | `docs.html` | Documentação e wireframes do site |

---

## Páginas e Funcionalidades

### 🏠 Home (`/`)
- Hero com destaque para a e-bike ST3
- Seção S6 com 6 camadas de proteção
- Seção de serviço Leva e Traz
- Cards com links para filiais e oficinas
- **4 popups de patrocinadores** (Betano, Privace, Principia, Manual) com rotação automática
- Navbar responsiva com menu hambúrguer
- Footer com newsletter e links

### 🚲 E-bikes (`/e-bikes`)
- Catálogo das e-bikes ST2 e ST3 open
- Grid de produtos com preços e especificações

### 🛒 Acessórios (`/acessorios`)
- Loja de acessórios: capacetes, pneus, selins, garrafas, etc.
- Carrinho de compras integrado

### 🔧 Oficinas (`/oficinas`)
- 3 filiais com endereços e horários
- Vídeo institucional
- Planos de manutenção (A, B, C)
- Galeria de fotos
- Serviço Leva e Traz com vans

### 📅 Agendamento (`/agendamento`)
- Formulário completo de agendamento
- Tipos de serviço (Revisão A, B, C, Express)
- FAQ com perguntas frequentes

### 📖 Sobre (`/sobre`)
- História da Softbyke
- Valores e missão
- Informações de contato

### 🏢 Empresa (`/empresa`)
- Briefing do projeto com as 17 perguntas e respostas
- Link para a versão em PDF

### 🛍️ Carrinho & Checkout (`/carrinho`, `/checkout`)
- Adicionar/remover itens
- Resumo do pedido
- Finalização de compra

### 📝 Cadastro (`/cadastro`)
- Formulário de inscrição na newsletter
- Campos: nome, e-mail, telefone, interesses
- Mensagem de sucesso após envio

### 📄 Documentação (`/docs`)
- 14 âncoras de navegação
- Wireframes de todas as páginas (cards com placeholders)
- Style guide com exemplos de formatação
- Paleta de cores do site
- Diretório de 10 parceiros externos

---

## Guia de Estilo

### Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Fundo Escuro | `#141414` | Background principal |
| Branco | `#FFFFFF` | Texto e elementos |
| Off-White | `#F5F5F3` | Seções claras |
| Cream | `#FAFAF9` | Fundo de formulários |
| Texto Suave | `#555555` | Descrições e textos secundários |
| Borda Input | `#E2E2E0` | Bordas de campos |

### Fontes

- **Títulos:** Space Grotesk (300–700)
- **Corpo:** DM Sans (300–700)
- **Monospace:** ui-monospace (tags e código)

### Componentes

- **Navbar:** Fixa no topo, menu hambúrguer mobile, links para todas as páginas
- **Footer:** Newsletter, colunas de links, redes sociais, termos legais
- **Cards:** Bordas arredondadas (`8px`), hover com elevação
- **Botões:** Dois estilos — primário (fundo escuro) e secundário (borda)

---

## Como Instalar e Rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14+)
- npm

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/samuelmfonseca/softbyke.com.git

# Entrar na pasta
cd softbyke.com

# Instalar dependências
npm install
```

### Executar

```bash
# Iniciar o servidor
node server.js

# Ou com npm
npm start
```

O site estará disponível em: **http://localhost:3000**

---

## Patrocinadores

| Patrocinador | Link |
|-------------|------|
| Betano | [betano.com](https://www.betano.com) |
| Privace | [privace.com.br](https://www.privace.com.br) |
| Principia | [principia.com.br](https://www.principia.com.br) |
| Manual | [manual.com.br](https://www.manual.com.br) |

Os popups de patrocinadores aparecem automaticamente na home após 2 segundos, com rotação a cada 5 segundos.

### Adicionar novo patrocinador

1. Coloque a imagem quadrada (ex: 800×800px) em `public/CSS/Images/`
2. Adicione o popup HTML em `public/index.html` (seção "PATROCÍNIOS")
3. Adicione o objeto no array `popups` do JavaScript

---

## Contribuidores

- **Samuel Fonseca** — [GitHub](https://github.com/samuelmfonseca)

---

## Licença

Este projeto é propriedade privada da Softbyke.