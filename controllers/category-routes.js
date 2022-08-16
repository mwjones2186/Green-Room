const router = require('express').Router();
const { json } = require('sequelize/types');
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
        attributes:['id','category_name'],
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

router.get('/:id/posts/:post_id', (req,res) =>{
    Post.findOne({
        where:{
            id:req.params.post_id
        },
        attributes:[
            'id',
            'title',
            'body',
            'created_at'
        ],
        include:[
            {
                model:Comment,
                attributes:['id','comment_text', 'post_id', 'user_id', 'created_at'],
                include:{
                    model:User,
                    attributes:['username']
                }
            },
            {
              model:User,
              attributes:['username']  
            }
        ]
    })
    .then(dbPostData =>{
        if(!dbPostData){
            res.status(400).json({message:'No post found with this id'});
            return;
        }
        const post = dbPostData.get({plain:true});

        res.render('category/single-post', {
            post,
            loggedIn:req.session.loggedIn
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id/create-post', (req, res) =>{
    if(!req.session.loggedIn){
        res.redirect('/');
    }
    res.render('category/create-post', {
      category_id:req.params.id,
      loggedIn:req.session.loggedIn,
      user_id:req.session.user_id
    })
})


module.exports = router;