const express = require("express");
require('dotenv').config();
const exphbs = require("express-handlebars");
const helpers = require("./utils");
const hbs = exphbs.create({
  // how you want to connect express with handlebars
  helpers,
});
const session = require("express-session");
const sequelize = require("./config/connection");

const app = express();

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

// (set up handlebar engine) setup express so that it knows we are using handlebars as our template engine
// sets up the Handlebars engine with its default configurations.
app.engine("handlebars", hbs.engine);
// tells Express to use 'handlebars' as the default file extension for views.
app.set("view engine", "handlebars");

// setup express to use sessions & create cookie on the browser
const sessionConfig = {
  secret: process.env.MY_SECRET,
  resave: false,
  saveUninitialized: false,
};

// middlewares
app.use(express.static(__dirname + "/public")); // __dirname: current dir the server.js is in
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig)); //this will create req.session object for every req that comes into our server

app.use( routes);

// sync db and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`server running at ${PORT}`));
});
