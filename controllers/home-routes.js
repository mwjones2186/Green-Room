const router = require('express').Router();
const {Category} = require('../models');

//display home page
router.get('/', async (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
  });
});

//display login forms
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/dashboard', async (req, res) => {
  res.render('dashboard', {
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
  });
});

router.get('/dashboard/create', async (req, res) => {
  res.render('create', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/dashboard/edit', async (req, res) => {
  res.render('edit', {
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
  });
});

module.exports = router;
