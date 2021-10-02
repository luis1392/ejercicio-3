const express = require("express");
const cors = require('cors');
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
require("dotenv").config();

const app = express();

// capturar body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors(corsOptions));

// import routes
const apiRoutes = require("./routes/api.routes");

// routes
app.use("/api", apiRoutes);

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`servidor andando en: ${PORT}`);
});
