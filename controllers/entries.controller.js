const models = require("../models/entries.model");

const getAllEntries = async (req, res) => {
  let entries;
  entries = await models.getAllEntries();
  res.status(200).json(entries);
};

const updateEntry = async (req, res) => {
  const entry = req.body;
  //Logica para alterar elemento de la BBDD
  models.updateEntry(entry);
  //De momento, enviar mensaje:
  res.status(200).json({
    message: `Se ha modificado la entry '${entry.title}'`,
  });
};
// Objeto de ejemplo para actualizar entry:
// {"id_entry":"1","title":"Noticia: Me editan!!","content":"Me han editado, otra vez!!!", "date": "2023-11-12", "id_author": "1", "category": "Comedia"}

const deleteEntry = async (req, res) => {
  const title = req.params.title;
  //Logica para borrar elemento de la BBDD
  models.deleteEntry(title);
  //De momento, enviar mensaje:
  res.status(200).json({
    message: `Se ha borrado la entry '${title}'`,
  });
};
// Url para probar a borrar una entry:
// http://localhost:3000/api/entries/Noticia:%20SOL%20en%20Madrid
module.exports = {
  getAllEntries,
  updateEntry,
  deleteEntry,
};
