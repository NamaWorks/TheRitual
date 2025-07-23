const router = require("express").Router()

const { getHome, getNav } = require('./controllers')

router.get('/', async (req, res, next) => {
  const home = await getHome();
  const nav = await getNav();
  // console.log(home);
  res.render('pages/home', {
    home,
    nav
  })
})

router.get('/about', async (req, res, next) => {
  const about = await getHome()
  res.render('pages/about', {
    about
  })
})

module.exports = router