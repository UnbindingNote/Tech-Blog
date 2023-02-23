const router = require('express').Router();
const { Comments, Posts, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');


// GET all shop for homepage
router.get('/', async (req, res) => {
  try {
    const dbShopData = await Shop.findAll({
      include: [
        {
          model: Comments,
          attributes: ['name', 'description'],
        },
      ],
    });

    const shops = dbShopData.map((shop) =>
      shop.get({ plain: true })
    );
    console.log('shops; ', shops);
    res.render('homepage', {
      shops,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category
// Use the custom middleware before allowing the user to access the shop
router.get('/shop/:id', withAuth, async (req, res) => {
  try {
    const dbShopData = await Shop.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          attributes: [
            'id',
            'name',
            'filename',
            'description',
          ],
        },
      ],
    });

    const shop = dbShopData.get({ plain: true });
    res.render('shop', { shop, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one comment
// Use the custom middleware before allowing the user to access the comments
router.get('/comments/:id', withAuth, async (req, res) => {
  try {
    const dbcommentsData = await Comments.findByPk(req.params.id);

    const comments = dbcommentsData.get({ plain: true });

    res.render('comments', { comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
