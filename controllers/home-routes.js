const router = require('express').Router();


//display home page 
router.get('/', async (req, res)=>{
    res.render('homepage', {
        loggedIn: req.session.loggedIn
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
module.exports = router;