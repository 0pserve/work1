const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.json());

// 1. DB 연결 (hotel.db 파일이 없으면 새로 생성됨)
const db = new sqlite3.Database('./hotel.db', (err) => {
    if (err) return console.error("DB 연결 실패:", err.message);
    console.log("SQLite 연결 성공!");
});

// 2. 테이블 생성 (서버 실행 시 자동 생성)
db.run(`CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hotelName TEXT,
    guestName TEXT,
    guestEmail TEXT,    
    password TEXT,      
    checkIn TEXT,
    totalPrice INTEGER
)`);
// 3. 예약 저장 API (POST)
app.post('/api/reserve', (req, res) => {
    const { hotelName, guestName, guestEmail, password, checkIn, totalPrice } = req.body;
    const sql = `INSERT INTO reservations (hotelName, guestName, guestEmail, password, checkIn, totalPrice) VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(sql, [hotelName, guestName, guestEmail, password, checkIn, totalPrice], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "예약 완료!", id: this.lastID });
    });
});

// 4. 예약 목록 조회 API (GET)
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에서 시작되었습니다.`);
});
