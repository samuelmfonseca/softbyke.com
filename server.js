const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// ── Rotas ──────────────────────────────────────────────

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/e-bikes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'e-bikes.html'));
});

app.get('/acessorios', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'acessorios.html'));
});

app.get('/oficinas', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'oficina.html'));
});

app.get('/agendamento', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'agendamento.html'));
});

app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'sobre.html'));
});

app.get('/carrinho', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'carrinho.html'));
});

app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'checkout.html'));
});

app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'docs.html'));
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'cadastro.html'));
});

// ── Iniciar servidor ───────────────────────────────────

app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`);
});