const router = require('express').Router();
const {Category} = require('../models');

router.get('/', (req,res) =>{
    Category.findAll({raw: true})
        .then(dbCategoryData => {
            if(!dbCategoryData){
                res.status(400).json({message:'strike a conversation!'});
                return
            }

            res.render('category', {
                dbCategoryData,
                loggedIn:req.session.loggedIn
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', async (req, res) => {
    res.render('messageboard', {
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id,
    });
});


module.exports = router;