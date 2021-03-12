const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    req.session.a = 1;

    res.render('dashboard', {user: req.session.user})
});

module.exports = router;