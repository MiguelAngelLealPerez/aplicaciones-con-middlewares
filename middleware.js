const logTime = (req, res, next) => {
    let now = new Date();
    console.log(now);
    next();
};

const login = (req, res, next) => {
    console.log("Inicio de Sesion");
    next();
};

module.exports = { logTime, login };