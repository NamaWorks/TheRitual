const { getFromCache, setCache } = require("../utils/cache.js");
const { getApiData }  = require("./utils.js");

const getHome = async (req, res, next) => {
  try {
    const cacheKey = 'pages.home';
    const cached = getFromCache(cacheKey);
    if (cached) {
      console.log('value cached')
      return cached
    } else {
      console.log('value not cached')
      const home = getApiData('pages/')
        .then(res => res)
        .catch(err => console.log(err))
        .then(res => res.find(item => item.slug === 'home'))
        .catch(err => console.log(err))
      
      setCache(cacheKey, home, 60000)
      return home
    }

  } catch (err) {
    console.log('error')
    // return res.status(400).json(`error at getHome: ${err}`)
  }
};

module.exports = { getHome }