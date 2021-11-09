const express = require("express");
const app = express();
app.use(express.json());


const port = process.env.PORT || 3000;
require("dotenv").config();

const Conn = require("./src/config/db");

Conn();

const countriesRoutes = require('./src/routes/countries.routes');
app.use('/countries', countriesRoutes);

const statesRoutes = require('./src/routes/states.routes');
app.use('/states', statesRoutes);

const citiesRoutes = require('./src/routes/cities.routes');
app.use('/cities', citiesRoutes);




app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});




