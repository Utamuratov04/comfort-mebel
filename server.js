// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Agar rasmlar yoki CSS-lar bo'lsa, joriy papkani ochiq qolamiz
// app.use(express.static(__dirname));

// let mebellar = [
//     { nomi: "Klassik Divan", narxi: "3 500 000", rasm: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500" }
// ];

// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
// app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));

// app.get('/api/mebellar', (req, res) => res.json(mebellar));

// app.post('/api/add-mebel', (req, res) => {
//     const yangi = req.body;
//     if(yangi.nomi && yangi.narxi) {
//         mebellar.push(yangi);
//         console.log("Yangi mebel qo'shildi:", yangi.nomi);
//         res.status(200).json({ message: "OK" });
//     } else {
//         res.status(400).json({ message: "Xato ma'lumot" });
//     }
// });

// app.delete('/api/delete-mebel/:index', (req, res) => {
//     const index = parseInt(req.params.index);
//     if (index >= 0 && index < mebellar.length) {
//         console.log("O'chirildi:", mebellar[index].nomi);
//         mebellar.splice(index, 1);
//         res.json({ message: "O'chirildi" });
//     } else {
//         res.status(404).json({ message: "Topilmadi" });
//     }
// });

// app.listen(PORT, () => console.log(`\n>>> Server yoniq: http://localhost:${PORT}\n>>> Admin panel: http://localhost:${PORT}/admin`));


// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();

// // Vercel uchun portni moslashtiramiz (mahalliy kompyuterda 3000 da ishlayveradi)
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Statik fayllarni (CSS, JS, Rasmlar) ochiq qoldiramiz
// app.use(express.static(__dirname));

// let mebellar = [
//     { nomi: "Klassik Divan", narxi: "3 500 000", rasm: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500", category: "oshxona" }
// ];

// // SAHIFALAR UCHUN MARSHRUTLAR (ROUTES)

// // Bosh sahifa
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Admin panel sahifasi
// app.get('/admin', (req, res) => {
//     res.sendFile(path.join(__dirname, 'admin.html'));
// });

// // Mobil format va brauzerdan login panelga kirgandagi marshrut (Xatolikni oldini oladi)
// app.get('/login.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'login.html'));
// });


// // API MARSHRUTLARI (MA'LUMOTLAR UCHUN)

// app.get('/api/mebellar', (req, res) => {
//     res.json(mebellar);
// });

// app.post('/api/add-mebel', (req, res) => {
//     const yangi = req.body;
//     if(yangi.nomi && yangi.narxi) {
//         mebellar.push(yangi);
//         console.log("Yangi mebel qo'shildi:", yangi.nomi);
//         res.status(200).json({ message: "OK" });
//     } else {
//         res.status(400).json({ message: "Xato ma'lumot" });
//     }
// });

// app.delete('/api/delete-mebel/:index', (req, res) => {
//     const index = parseInt(req.params.index);
//     if (index >= 0 && index < mebellar.length) {
//         console.log("O'chirildi:", mebellar[index].nomi);
//         mebellar.splice(index, 1);
//         res.json({ message: "O'chirildi" });
//     } else {
//         res.status(404).json({ message: "Topilmadi" });
//     }
// });

// // Serverni ishga tushirish
// app.listen(PORT, () => {
//     console.log(`\n>>> Server yoniq: http://localhost:${PORT}`);
//     console.log(`>>> Admin panel: http://localhost:${PORT}/admin\n`);
// });

// // VERCEL UCHUN ENG MUHIM QISM: Express-ni eksport qilamiz
// module.exports = app;


// const express = require('express');
// const path = require('path');
// const app = express();

// // Vercel dinamik porti yoki mahalliy kompyuter uchun 3000-port
// const PORT = process.env.PORT || 3000;

// // Body-parser o'rniga Express'ning o'z ichki xavfsiz modullari
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Statik fayllarni (CSS, JS, Rasmlar) brauzerga ochiq qoldiramiz
// app.use(express.static(__dirname));

// // Boshlang'ich mebellar ro'yxati (Siz yuborgan JSON formatga to'liq moslandi)
// let mebellar = [
//     { id: 11, nomi: "Modern Wood Kitchen", narxi: "12 000 000", rasm: "https://images.unsplash.com/photo-1556911223-e4520288df81?w=800", category: "oshxona" },
//     { id: 12, nomi: "White Glossy Set", narxi: "18 500 000", rasm: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800", category: "oshxona" },
//     { id: 13, nomi: "Classic Oak Kitchen", narxi: "22 000 000", rasm: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800", category: "oshxona" },
//     { id: 14, nomi: "Compact Kitchen Unit", narxi: "9 800 000", rasm: "https://images.unsplash.com/photo-1565183929294-7063f23ce0f8?w=800", category: "oshxona" },
//     { id: 15, nomi: "Loft Style Dark", narxi: "16 700 000", rasm: "https://images.unsplash.com/photo-152069049698-acd2fccb8cc8?w=800", category: "oshxona" }
// ];

// // ------------------- SAHIFALAR MARSHRUTLARI (ROUTES) -------------------

// // Bosh sahifa
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Admin panel sahifasi
// app.get('/admin', (req, res) => {
//     res.sendFile(path.join(__dirname, 'admin.html'));
// });

// // Mobil qurilmalardan kirganda xatolikni oldini oluvchi login marshruti
// app.get('/login.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'login.html'));
// });


// // ------------------- MA'LUMOTLAR UCHUN API MARSHRUTLARI -------------------

// // Barcha mebellarni olish API si
// app.get('/api/mebellar', (req, res) => {
//     res.json(mebellar);
// });

// // Yangi mebel qo'shish API si
// app.post('/api/add-mebel', (req, res) => {
//     const yangi = req.body;
//     if(yangi.nomi && yangi.narxi) {
//         // Agar id yuborilmagan bo'lsa, avtomatik yangi ID generatsiya qilamiz
//         if (!yangi.id) yangi.id = Date.now(); 
        
//         mebellar.push(yangi);
//         console.log("Yangi mebel qo'shildi:", yangi.nomi);
//         res.status(200).json({ message: "OK" });
//     } else {
//         res.status(400).json({ message: "Xato ma'lumot jo'natildi" });
//     }
// });

// // Mebelni o'chirish API si
// app.delete('/api/delete-mebel/:index', (req, res) => {
//     const index = parseInt(req.params.index);
//     if (index >= 0 && index < mebellar.length) {
//         console.log("O'chirildi:", mebellar[index].nomi);
//         mebellar.splice(index, 1);
//         res.json({ message: "Mebel muvaffaqiyatli o'chirildi" });
//     } else {
//         res.status(404).json({ message: "Mebel topilmadi" });
//     }
// });

// // Serverni loyihani ishga tushirish qismi
// app.listen(PORT, () => {
//     console.log(`\n>>> Server yoniq: http://localhost:${PORT}`);
//     console.log(`>>> Admin panel: http://localhost:${PORT}/admin\n`);
// });

// // VERCEL SERVERLESS ISHLASHI UCHUN EKSPORT:
// module.exports = app;


const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Sizning Mokky.dev havolangiz
const MOKKY_URL = 'https://7da933a18628966e.mokky.dev';

// ------------------- SAHIFALAR -------------------
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));
app.get('/login.html', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get('/profile.html', (req, res) => res.sendFile(path.join(__dirname, 'profile.html')));


// ------------------- MEBELLAR API (Mokky ga ulandi) -------------------

// Mebellarni Mokky dan olish
app.get('/api/mebellar', async (req, res) => {
    try {
        const response = await fetch(`${MOKKY_URL}/mebellar`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Mokky dan yuklashda xatolik yuz berdi" });
    }
});

// Yangi mebelni Mokky ga qo'shish
app.post('/api/add-mebel', async (req, res) => {
    try {
        const response = await fetch(`${MOKKY_URL}/mebellar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Mokky ga saqlashda xatolik" });
    }
});


// ------------------- BUYURTMALAR API (Mokky ga ulandi) -------------------

// Telefon raqam orqali buyurtmalarni Mokky dan qidirish
app.get('/api/my-orders/:tel', async (req, res) => {
    try {
        const userTel = req.params.tel;
        // Mokky.dev da filtr qilish uchun URL oxiriga ?tel= raqam qo'shiladi
        const response = await fetch(`${MOKKY_URL}/orders?tel=${encodeURIComponent(userTel)}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Buyurtmalarni yuklashda xatolik" });
    }
});

// Yangi buyurtmani Mokky ga saqlash
app.post('/api/add-order', async (req, res) => {
    try {
        const yangiBuyurtma = req.body;
        yangiBuyurtma.status = "Kutilmoqda";
        yangiBuyurtma.sana = new Date().toLocaleDateString();

        const response = await fetch(`${MOKKY_URL}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(yangiBuyurtma)
        });
        const data = await response.json();
        res.status(200).json({ message: "OK", data });
    } catch (error) {
        res.status(500).json({ error: "Buyurtma saqlanmadi" });
    }
});

app.listen(PORT, () => console.log(`Server portda yoniq: ${PORT}`));
module.exports = app;