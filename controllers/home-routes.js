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

router.get('/messageboard/create', async (req, res) => {
  res.render('create', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/messageboard', async (req, res) => {
  res.render('messageboard', {
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
  });
});

router.get('/threads', (req,res) =>{
  Category.findAll({raw: true})
    .then(dbCategoryData => {
      if(!dbCategoryData){
        res.status(400).json({message:'strike a conversation!'});
        return
      }
      const category = dbCategoryData;//dbCategoryData.get({plain:true});

      res.render('category', {
        category,
        loggedIn:req.session.loggedIn
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;
