const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { registerDb } = require('./domains/access')
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body
    const hashedPass = await bcrypt.hash(password, 8)
    const user = await registerDb(username, hashedPass)
    res.status(200).json( {user} )
});

router.post('/login', async (req, res) => {
    
});

module.exports = router;
