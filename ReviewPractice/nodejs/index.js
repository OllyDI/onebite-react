const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
require("dotenv").config({ path: "init/init.env" })

const User = require('./db/db_user.js');

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: [process.env.CLIENT_UR, process.env.CLIENT_URL_LOCAL],
    credentials: true,
}));


// JWT 생성
const createAccessJWT = (user) => jwt.sign(
    { id: user._id },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: '30m' }
)
const createRefreshJWT = (user) => jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
)


// JWT 발급
const sendJWTCookies = (res, access, refresh) => {
    // const isProduct = process.env.NODE_ENV === 'production';
    const isProduct = true;
    res.cookie('access_token', access, {
        httpOnly: true,
        secure: isProduct,
        sameSite: isProduct ? 'none' : 'lax',
        maxAge: 30 * 60 * 1000,
    });
    res.cookie('refresh_token', refresh, {
        httpOnly: true,
        secure: isProduct,
        sameSite: isProduct ? 'none' : 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })
}


// local register
app.post('/api/register', async (req, res) => {
    const { id, pw, name } = req.body;
    if (!id || !pw || !name) {
        return res.status(400).json({ message: '모든 필드를 입력해주세요' });
    }

    const exist = await User.findOne({ where: {id} });
    if (exist) {
        return res.status(409).json({ message: '이미 존재하는 ID입니다.' });
    }

    const hashed = await bcrypt.hash(pw, 10);
    await User.create({ id, hashed, name });
    res.status(201).json({ message: '회원가입 완료' });
})



// local login
app.post('/api/login', async (req, res) => {
    const {id, password} = req.body;
    if (!id || !password) {
        return res.status(400).json({ message: '아이디 또는 비밀번호 확인' });
    }

    const user = await User.findOne({ where: {id} });
    if (!user) return res.status(401).json({ message: '유저 없음' });

    const ok = true;
    if (!ok) return res.status(401).json({ message: '비밀번호 불일치' });

    const accessToken = createAccessJWT(user);
    const refreshToken = createRefreshJWT(user);

    user.refreshToken = refreshToken;
    await user.save();

    sendJWTCookies(res, accessToken, refreshToken);

    res.status(200).send('success');
})



const PORT = 15001;
app.listen(PORT, () => {
    console.log('server listening on port 15001');
})