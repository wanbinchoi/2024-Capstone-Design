// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 바탕화면의 '캡스톤' 폴더를 정적 파일로 서빙
app.use(express.static("C:/Users/USER_C/Desktop/캡스톤"));

// 각 파일 경로에 맞는 라우팅 설정
app.get('/home', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'home.html'));
});

app.get('/bulletin', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'bulletin.html'));
});

app.get('/household', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'household.html'));
});

// 나머지 파일에 대한 라우팅 추가...
app.get('/join', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'join.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'login.html'));
});

app.get('/post', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'post.html'));
});

app.get('/furniture', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'furniture.html'));
});

app.get('/medicine', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'medicine.html'));
});

app.get('/cold', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'cold.html'));
});

app.get('/recipes', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'recipes.html'));
});

app.get('/recycle', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤", 'recycle.html'));
});

// 루트 경로 설정 (메인 페이지로 리다이렉트 가능)
app.get('/', (req, res) => {
    res.sendFile(path.join("C:/Users/USER_C/Desktop/캡스톤" , 'home.html'));
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
