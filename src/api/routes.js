const router = require("express").Router()

const { getHome } = require('./controllers')

router.get('/', async (req, res, next) => {
  const home = await getHome()
  // console.log(home);
  res.render('pages/home', {
    home
  })
})

router.get('/about', async (req, res, next) => {
  const about = await getHome()
  res.render('pages/about', {
    about
  })
})

module.exports = router