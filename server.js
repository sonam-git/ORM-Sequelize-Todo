const express = require("express");
const app = express();

const routes = require('./routes')

const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync db and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`server running at port 3001`));
});
