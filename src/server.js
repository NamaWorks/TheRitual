const express = require('express');
const path = require('path');
const { getHome } = require('./api/controllers.js');
const router = require('./api/routes.js');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

// Serve static files from dist (for built assets)
app.use(express.static(path.join(__dirname, '../dist')));

app.use("/", router)

// Home route renders the Pug template
// app.get('/', async (req, res) => {
//   const home = await getHome()
//   res.render('pages/home', {
//     home
//   })
// });

// app.get('/about', (req, res) => { // if we want ot create a SPA we should fetch the data from a certain endpoind and then change the current url (also modify the history with history API)
//   res.render('pages/about')
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
