const router = require('express').Router();
const { User, Post, Comment, Category } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'body', 'user_id', 'category_id'],
    include: [
      {
        model:Comment,
        attributes:['id', 'comment_text', 'post_id', 'user_id'],
        include:{
          model:User,
          attributes:['username']
        }
      },
      {
        model: User,
        attributes: ['username'],
      },
      {
        model:Category,
        attributes:['id']
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/user', (req, res)=>{
  console.log(req.session.user_id)
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: ['id', 'title', 'body', 'user_id'],
    include: [
      //connect to future Comment Model
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {res.json(dbPostData)
    console.log(dbPostData)})
    // .catch((err) => {
    //   console.log(err);
    //   res.status(500).json(err);
    // });
    });

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'body', 'user_id'],
    include: [
      {
        model:Comment,
        attributes:['id', 'comment_text', 'post_id', 'user_id'],
        include:{
          model:User,
          attributes:['username']
        }
      },
      {
        model: User,
        attributes: ['username'],
      },
      {
        model:Category,
        attributes:['id']
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(400).json({ message: 'No post found with this id!' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    body: req.body.body,
    user_id: req.session.user_id,
    category_id:req.body.category_id
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Post.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id!' });
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
