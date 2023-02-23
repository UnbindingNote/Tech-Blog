const router = require('express').Router();
// const bakedRoutes = require('./bakedRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes')
const userRoutes = require('./userRoutes');

// router.use('/bakedGoods', bakedRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);
router.use('/users', userRoutes);

module.exports = router;