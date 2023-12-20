const express = require("express");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  // how you want to connect express with handlebars
});
const session = require('express-session');
const sequelize = require("./config/connection");
const app = express();

const routes = require('./routes')

const PORT = process.env.PORT || 3001;

// (set up handlebar engine) setup express so that it knows we are using handlebars as our template engine
// sets up the Handlebars engine with its default configurations.
app.engine('handlebars',hbs.engine);
// tells Express to use 'handlebars' as the default file extension for views.
app.set('view engine','handlebars');

// setup express to use sessions & create cookie on the browser
const sessionConfig = {
  secret: 'super secret',
  resave: false,
  saveUninitialized: false,
}

// middlewares
app.use(express.static(__dirname + '/public'));  // __dirname: current dir the server.js is in
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig)); //this will create req.session object for every req that comes into our server

app.use(routes);

// sync db and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`server running at port 3001`));
});
