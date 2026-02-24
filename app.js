const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');

const app = express();

function hashPassword(raw) {
    const salt = process.env.PASSWORD_SALT || 'default_salt';
    return crypto.createHash('sha256').update(String(raw) + salt).digest('hex');
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main2.html'));
});


const db = new sqlite3.Database('./hotel.db', (err) => {
    if (err) return console.error("DB 연결 실패:", err.message);
    console.log("SQLite 연결 성공!");
});

db.run(`CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hotelName TEXT,
    guestName TEXT,
    guestEmail TEXT,    
    password TEXT,      
    checkIn TEXT,
    totalPrice INTEGER
)`);

app.post('/api/reserve', (req, res) => {
    const { hotelName, guestName, guestEmail, password, checkIn, totalPrice } = req.body || {};

    if (!hotelName || !guestName || !guestEmail || !password || !checkIn) {
        return res.status(400).json({ error: '필수 입력값이 누락되었습니다.' });
    }

    const numericPrice = Number.isFinite(Number(totalPrice)) ? Number(totalPrice) : 0;
    if (numericPrice <= 0) {
        return res.status(400).json({ error: '결제 금액이 올바르지 않습니다.' });
    }

    const hashedPassword = hashPassword(password);
    const sql = `INSERT INTO reservations (hotelName, guestName, guestEmail, password, checkIn, totalPrice) VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(sql, [hotelName, guestName, guestEmail, hashedPassword, checkIn, numericPrice], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "예약 완료!", id: this.lastID });
    });
});

app.get('/api/reservations', (req, res) => {
    db.all("SELECT * FROM reservations", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.delete('/api/reserve/:id', (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM reservations WHERE id = ?`, id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "예약이 취소되었습니다." });
    });
});

app.post('/api/check-reservation', (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "이메일과 비밀번호를 모두 입력해주세요." });
    }

    const hashedPassword = hashPassword(password);
    const sql = `SELECT * FROM reservations WHERE guestEmail = ? AND password = ? ORDER BY id DESC LIMIT 1`;

    db.get(sql, [email, hashedPassword], (err, row) => {
        if (err) {
            return res.status(500).json({ success: false, message: "예약 조회 중 오류가 발생했습니다." });
        }

        if (!row) {
            return res.json({ success: false, message: "일치하는 예약 내역이 없습니다." });
        }

        res.json({ success: true, data: row });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에서 시작되었습니다.`);
});

