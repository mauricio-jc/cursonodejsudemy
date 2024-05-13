const app = require('./config/server');

const routeHome = require('./app/routes/home')(app);
const routeNews = require('./app/routes/news')(app);
const routeAddNew = require('./app/routes/add_new')(app);

app.listen(3000, () => {
  console.log('Server Up');
});