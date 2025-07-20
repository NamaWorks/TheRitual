const router = require("express").Router()

const { getHome } = require('./controllers')

router.get('/', async (req, res, next) => {
  const home = await getHome()
  res.render('pages/home', {
    home
  })
})

module.exports = router