const router = require('express').Router();
const {Category, Post, User} = require('../models');

router.get('/', (req,res) =>{
    Category.findAll({raw: true})
        .then(dbCategoryData => {
            if(!dbCategoryData){
                res.status(400).json({message:'strike a conversation!'});
                return
            }

            res.render('category/list', {
                categories: dbCategoryData,
                loggedIn:req.session.loggedIn
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', async (req, res) => {
    Category.findOne({
        where:{
            id:req.params.id
        },
        attributes:['category_name'],
        include:{
            model:Post,
            attributes:['id','title', 'body'],
            include:{
                model:User,
                attributes:['username']
            }
        }
    })
    .then(dbCategoryData => {
        if(!dbCategoryData){
            res.status(400).json({message:'Category not found!'});
            return
        }
        const category = dbCategoryData.get({plain: true});
        console.log(category.posts)
        res.render('category/posts', {
            category,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;