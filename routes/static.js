const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/asset/font/:family/:font', (req, res) => {
    const family = req.params.family;
    const font = req.params.font;
    const fontPath = path.join(__dirname, '../assets', 'fonts', family, font);
    if (fs.existsSync(fontPath)) {
        return res.sendFile(fontPath);
    } else {
        return res.sendStatus(404);
    }
});

router.get('/css/font/:font', (req, res) => {
    let font = req.params.font;
    if (font.endsWith(".sass") || font.endsWith(".map"))
        font = font.replace(".sass", "").replace(".map", "");
    if (!font.endsWith(".css"))
        font += ".css";
    const sheetPath = path.join(__dirname, '../assets', 'stylesheets', 'fonts', font);
    if (fs.existsSync(sheetPath)) {
        return res.sendFile(sheetPath);
    } else {
        return res.sendStatus(404);
    }
});

router.get('/css/:stylesheet', (req, res) => {
    const sheet = req.params.stylesheet;
    const sheetPath = path.join(__dirname, '../assets', 'stylesheets', sheet);
    if (fs.existsSync(sheetPath)) {
        return res.sendFile(sheetPath);
    } else {
        return res.sendStatus(404);
    }
});

module.exports = router;
