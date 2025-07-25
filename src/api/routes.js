const router = require("express").Router()

const { getHome, getNav, getAbout } = require('./controllers')

router.get('/', async (req, res, next) => {
  const home = await getHome();
  const nav = await getNav();
  // console.log(home);
  res.render('pages/home', {
    home,
    nav
  });
});

router.get('/about', async (req, res, next) => {
  const about = await getAbout();
  const nav = await getNav();
  res.render('pages/about', {
    about,
    nav
  });
});

// we need to specify how to handle dynamic routing => /items/:id ; something like below -> Pending to check

// router.get('/items/:id', async (req, res, next) => {
//   const { id } = req.params
//   const items = await getItems(id);
//   const nav = await getNav();
//   res.render('pages/items', {
//     item,
//   });
// });

// this route would be backed up by a controller that gets the data based on the id searched and returns all the items with a notification in case there's no such id

module.exports = router