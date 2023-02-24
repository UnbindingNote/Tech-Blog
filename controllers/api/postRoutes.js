// need something for root and then finding by id? 
// do I bring in comments? figure it out
// GET/POST/DELETE probably

const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get();
router.post('/', withAuth, async (req, res)=>{
    try {
        const newPost = await Post.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        res.status(200).json(newPost);
        
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});
router.delete();