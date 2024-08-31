const express = require("express");
require("dotenv").config();
const app = express();

const routes = require("./routes");
routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});