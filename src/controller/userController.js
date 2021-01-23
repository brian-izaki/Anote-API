const User = require("../models/user");

module.exports = {
  index: (req, res) => {
    res.send({msg: "rota index"})
  },

  create: async (req, res) => {
    try {
      let { username, password, email } = req.body;
      await User.create({ username, password, email });

      res.status(201).send({ msg: "Usuário criado com sucesso!" });
    } catch (error) {
      console.log(error)
      res.status(412).send({ msg: "Erro ao cadastrar usuário" });
    }
  },
};
