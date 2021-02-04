const jwt = require("jsonwebtoken");
const cfg = require("../../config/index");

async function validateToken(req, res, next) {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  
  if (token) {
    jwt.verify(token, cfg.jwtSecret, cfg.opts, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: "autenticação com o token falhou",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).json({
      success: false,
      message: "nenhum token foi informado!",
    });
  }
}

module.exports = validateToken;
