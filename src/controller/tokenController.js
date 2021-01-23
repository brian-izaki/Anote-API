const jwt = require("jsonwebtoken");
const User = require("../models/user");
const cfg = require("../../config/index");

module.exports = {
  async genToken(req, res) {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(412).json({ msg: "Não foi passado o email ou senha" });
      return;
    }
    try {
      const foundUser = await User.findOne({ where: { email } });

      if (!foundUser) {
        res.status(404).json({ msg: "Email não foi encontrado" });
        return;
      }

      if (!User.isPassword(password, foundUser.password)) {
        res.status(412).json({ msg: "Senha inválida" });
        return;
      }

      const token = jwt.sign({ id: foundUser.id }, cfg.jwtSecret, cfg.opts);
      res.json({ token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "Erro ao gerar o token" });
    }
  },
};
