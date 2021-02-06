const Notes = require("../models/notes");

module.exports = {
  index: async (req, res) => {
    const user_id = req.decoded.id;
    const hasUserId = user_id !== undefined;
    try {
      if (!hasUserId)
        return res
          .status(401)
          .json({ msg: "Não é possível acessar esta funcionalidade" });

      const notes = await Notes.findAll({ where: { user_id } });

      if (notes.length) return res.status(200).json(notes);
      else return res.status(404).json({ msg: "Anotações não encontradas" });
    } catch (error) {
      return res.status(412).json({
        msg: "Erro ao buscar as anotações",
      });
    }
  },

  store: async (req, res) => {
    const user_id = req.decoded.id,
      data = req.body;

    try {
      await Notes.create({ user_id, ...data });
      return res.status(201).json({ msg: "anotação criada com sucesso!" });
    } catch (error) {
      return res.status(412).json({ msg: "erro ao castrar a anotação" });
    }
  },

  delete: async (req, res) => {
    const user_id = req.decoded.id,
      note_id = req.params.id;

    try {
      if(!note_id)
        return res.status(412).json({msg: 'Não foi passado o id da anotação'})

      const hasNote = await Notes.findByPk(note_id);
      if(!hasNote)
        return res.status(404).json({msg: 'Não foi encontrada a anotação que deseja deletar'});
      
      await Notes.destroy({ where: { user_id, id: note_id } });  
      return res.status(204).end();

    } catch (err) {
      return res.status(412).json({ msg: "Erro ao deletar a anotação" });
    }
  },

  update: async (req, res) => {
    const user_id = req.decoded.id,
      note_id = req.params.id,
      note_data = req.body;
    
    try {
      if(!note_id)
        return res.status(412).json({msg: 'Não foi passado o id da anotação'})

      await Notes.update(note_data, {where: {id: note_id, user_id}})

      return res.status(200).json({msg: 'Sucesso ao alterar a anotação'})
    } catch (error) {
      return res.status(412).json({msg: 'Erro ao alterar a anotação'})
    }
  }
};
