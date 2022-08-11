const router = require('express').Router();
const {User, Post, Comment} = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) =>{
    Post.findAll({
        attributes:[
            'id',
            'post_url',
            'title',
            'created_at'
        ],
        include:[
           //connect to future Comment Model
            {
                model:User,
                attributes:['username']
            }   
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req,res) =>{
    Post.findOne({
        where:{
            id:req.params.id
        },
        attributes:[
            'id',
            'post_url',
            'title',
            'created_at'
        ],
        include:[
            {
                model:Comment,
                attributes:['id','comment_text','post_id','user_id','created_at'],
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
        if(dbPostData){
            res.status(400).json({message:'No post found with this id!'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req,res) =>{
    Post.create({
        title:req.body.title,
        post_url:req.body.post_url,
        user_id:req.session.user_id
    })
    .then(dbPostData =>res.json(dbPostData))
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req,res) =>{
    Post.update(
        {
            title:req.body.title
        },
        {
            where:{
                id:req.params.id
            }
        }
    )
    .then(dbPostData =>{
        if(!dbPostData){
            res.status(404).json({message:'No post found with this id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req,res) =>{
    Post.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(dbPostData =>{
        if(!dbPostData){
            res.status(404).json({message:'No post found with this id!'});
        }
        res.json(dbPostData);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;