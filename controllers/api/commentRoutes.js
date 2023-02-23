const router = require('express').Router();
const { Comments } = require('../../models');
// const withAuth = require('../../utils/auth'); didn't use it for project 2, I'll figure it out eventually.


router.post('/', async (req, res) => {
  try {
    const newComments = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComments);
  } catch (err) {
    res.status(400).json(err);
  }
});