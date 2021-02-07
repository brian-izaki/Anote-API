const User = require('../models/user');

module.exports = {
  index: async (req, res) => {
    try {
      const users = await User.findAll({});
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ msg: 'erro ao buscar usuários' });
    }
  },

  create: async (req, res) => {
    try {
      const { username, password, email } = req.body;
      await User.create({ username, password, email });

      res.status(201).send({ msg: 'Usuário criado com sucesso!' });
    } catch (error) {
      res.status(412).send({ msg: 'Erro ao cadastrar usuário' });
    }
  },
};
