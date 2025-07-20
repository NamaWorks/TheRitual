const { getApiData }  = require("./utils.js");

const getHome = async (req, res, next) => {
  try {
    // let home;
    const home = getApiData('pages/')
      .then(res => res)
      .catch(err => console.log(err))
      .then(res => res.find(item => item.slug === 'home'))
      .catch(err => console.log(err))
    // const home = homeCall.find(item => item.slug === 'home')
    return home
  } catch (err) {
    console.log('error')
    // return res.status(400).json(`error at getHome: ${err}`)
  }
};

module.exports = { getHome }