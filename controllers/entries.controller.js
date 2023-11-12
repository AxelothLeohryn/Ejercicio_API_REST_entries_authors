const models = require("../models/entries.model")

const getAllEntries = async (req, res) => {
  let entries;
  entries = await models.getAllEntries();
  res.status(200).json(entries);
};

const modifyEntry = async (req, res) => {
    const title = req.params.title;
    //Logica para alterar elemento de la BBDD

    //De momento, enviar mensaje:
    res.status(200).json({
        message: `Se ha modificado la entry '${title}'`
    });
}

module.exports = {
    getAllEntries,
    modifyEntry
};
