const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Specialized | Built for Legends',
    navLinks: [
      { label: 'Home', href: '/', active: true },
      { label: 'Shop', href: '#shop', active: false },
      { label: 'Special Offers', href: '#offers', active: false }
    ],
    categories: [
      { name: 'New Arrivals', href: '#', gradient: 'cat-1' },
      { name: 'Shop Bikes', href: '#', gradient: 'cat-2' },
      { name: 'Rider Favorites', href: '#', gradient: 'cat-3' }
    ],
    products: [
      { name: 'S-Works Tarmac SL8', tag: "Frei. World's Fastest", price: '$14,500' },
      { name: 'S-Works Aethos', tag: "Frei. World's Fastest", price: '$13,000' },
      { name: 'S-Works Epic', tag: "Frei. World's Fastest", price: '$12,500' },
      { name: 'S-Works Roubaix', tag: "Frei. World's Fastest", price: '$11,800' },
      { name: 'S-Works Stumpjumper', tag: "Frei. World's Fastest", price: '$10,500' },
      { name: 'S-Works Enduro', tag: "Frei. World's Fastest", price: '$11,000' },
      { name: 'S-Works Crux', tag: "Frei. World's Fastest", price: '$9,800' },
      { name: 'S-Works Shiv TT', tag: "Frei. World's Fastest", price: '$15,200' }
    ],
    stats: [
      { number: '50+', label: 'Years of Innovation' },
      { number: '8,000+', label: 'Stores Worldwide' },
      { number: '100%', label: 'Rider-First Warranties' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`);
});