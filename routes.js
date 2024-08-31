
const { logTime, login } = require("./middleware");

module.exports = (app) => {
    app.get("/", logTime, (req, res) => {
        res.send("Estas en la pagina principal");
    });

    app.get("/log", logTime, login, (req, res) => {
        res.send("Estas en login, gracias por su registro");
    });

    app.get("/paginados", logTime, (req, res) => {
        res.send("Estas en la pagina secundaria");
    });
};