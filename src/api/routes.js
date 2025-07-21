const router = require("express").Router()
// const { isCached } = require("../utils/middlewares")

const { getHome } = require('./controllers')

// router.get('/', [isCached(cache)] ,async (req, res, next) => { // we could create a middleware for the cache before the execution of the code below
//   console.log(cache)
//   const home = await getHome()
//   // console.log(__dirname)
//   // console.log(req.cacheValue)
//   res.render('pages/home', {
//     home
//   })
// })

router.get('/', async (req, res, next) => {
  const home = await getHome()
  res.render('pages/home', {
    home
  })
})

module.exports = router