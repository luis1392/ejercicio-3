const express = require("express");

require("dotenv").config();

const app = express();

// capturar body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// import routes
const apiRoutes = require("./routes/api.routes");

// routes
app.use("/api", apiRoutes);

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`servidor andando en: ${PORT}`);
});
