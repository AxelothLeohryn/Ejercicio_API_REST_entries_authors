const models = require("../models/authors.model");

const getAuthors = async (req, res) => {
  const email = req.query.email; //Busca un parámetro email=_______ en la URL
  if (email) {
    let author;
    author = await models.getAuthorByEmail(email);
    res.status(200).json(author);
    //Url para buscar por email:
    // http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es
  } else {
    let authors;
    authors = await models.getAllAuthors();
    res.status(200).json(authors);
    //Url para buscar todos:
    // http://localhost:3000/api/authors
  }
};
const createAuthor = async (req, res) => {
  const author = req.body;
  await models.createAuthor(author);
  res.status(201).json({
    message: `Usuario creado: ${author.name}  ${author.surname}`,
  });
};
//Objeto de ejemplo para crear:
// {
// "id_author": 45,
// "name": "Demo",
// "surname": "Ejemplez",
// "email": "soyunademo@thebridgeschool.es",
// "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
// }
const updateAuthor = async (req, res) => {
  const newData = req.body;
  try {
    await models.updateAuthor(newData);
    res.status(200).json({
      message: `Usuario actualizado: ${newData.name} ${newData.surname}`,
    });
  } catch (error) {
    return error.message;
  }
};
//Objeto de ejemplo para ceditar:
// {
// "id_author": 45,
// "name": "Demo 2",
// "surname": "Ejemplez 2",
// "email": "soyunademoeditada@thebridgeschool.es",
// "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
// }

const deleteAuthor = async (req, res) => {
  const email = req.params.email;
  console.log(email);
  try {
    await models.deleteAuthor(email);
    res.status(200).json({
      message: `Se ha borrado: ${email}`,
    });
  } catch (error) {
    return error.message;
  }
}
//URL para borrar auhor por email: http://localhost:3000/api/authors/alvaru@thebridgeschool.es

// const updateEntry = async (req, res) => {
//   const entry = req.body;
//   //Logica para alterar elemento de la BBDD
//   models.updateEntry(entry);
//   //De momento, enviar mensaje:
//   res.status(200).json({
//     entry,
//     message: `Se ha modificado la entry '${entry.title}'`,
//   });
// };

// const deleteEntry = async (req, res) => {
//   const title = req.params.title;
//   //Logica para borrar elemento de la BBDD
//   models.deleteEntry(title);
//   //De momento, enviar mensaje:
//   res.status(200).json({
//     message: `Se ha borrado la entry '${title}'`,
//   });
// };
module.exports = {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor
  //   updateEntry,
  //   deleteEntry,
};
