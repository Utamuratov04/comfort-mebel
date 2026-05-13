const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Agar rasmlar yoki CSS-lar bo'lsa, joriy papkani ochiq qolamiz
app.use(express.static(__dirname));

let mebellar = [
    { nomi: "Klassik Divan", narxi: "3 500 000", rasm: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500" }
];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));

app.get('/api/mebellar', (req, res) => res.json(mebellar));

app.post('/api/add-mebel', (req, res) => {
    const yangi = req.body;
    if(yangi.nomi && yangi.narxi) {
        mebellar.push(yangi);
        console.log("Yangi mebel qo'shildi:", yangi.nomi);
        res.status(200).json({ message: "OK" });
    } else {
        res.status(400).json({ message: "Xato ma'lumot" });
    }
});

app.delete('/api/delete-mebel/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < mebellar.length) {
        console.log("O'chirildi:", mebellar[index].nomi);
        mebellar.splice(index, 1);
        res.json({ message: "O'chirildi" });
    } else {
        res.status(404).json({ message: "Topilmadi" });
    }
});

app.listen(PORT, () => console.log(`\n>>> Server yoniq: http://localhost:${PORT}\n>>> Admin panel: http://localhost:${PORT}/admin`));


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Vercel uchun portni moslashtiramiz (mahalliy kompyuterda 3000 da ishlayveradi)
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Statik fayllarni (CSS, JS, Rasmlar) ochiq qoldiramiz
app.use(express.static(__dirname));

let mebellar = [
    { nomi: "Klassik Divan", narxi: "3 500 000", rasm: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500", category: "oshxona" }
];

// SAHIFALAR UCHUN MARSHRUTLAR (ROUTES)

// Bosh sahifa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Admin panel sahifasi
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Mobil format va brauzerdan login panelga kirgandagi marshrut (Xatolikni oldini oladi)
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});


// API MARSHRUTLARI (MA'LUMOTLAR UCHUN)

app.get('/api/mebellar', (req, res) => {
    res.json(mebellar);
});

app.post('/api/add-mebel', (req, res) => {
    const yangi = req.body;
    if(yangi.nomi && yangi.narxi) {
        mebellar.push(yangi);
        console.log("Yangi mebel qo'shildi:", yangi.nomi);
        res.status(200).json({ message: "OK" });
    } else {
        res.status(400).json({ message: "Xato ma'lumot" });
    }
});

app.delete('/api/delete-mebel/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < mebellar.length) {
        console.log("O'chirildi:", mebellar[index].nomi);
        mebellar.splice(index, 1);
        res.json({ message: "O'chirildi" });
    } else {
        res.status(404).json({ message: "Topilmadi" });
    }
});

// Serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`\n>>> Server yoniq: http://localhost:${PORT}`);
    console.log(`>>> Admin panel: http://localhost:${PORT}/admin\n`);
});

// VERCEL UCHUN ENG MUHIM QISM: Express-ni eksport qilamiz
module.exports = app;