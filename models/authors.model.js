const queries = require("../queries/authors.queries");
//Datos de conexion a BBDD
const pool = require("../config/db_pgsql");

const getAllAuthors = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllAuthors);
    result = data.rows;
  } catch (error) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};
const getAuthorByEmail = async (email) => {
    let client, result;
    try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.getAuthorByEmail, [
        email
      ]);
      result = data.rows;
    } catch (error) {
      console.log(err);
      throw err;
    } finally {
      client.release();
    }
    return result;
  };
  const createAuthor = async (author) => {
    let {id_author, name, surname, email, image} = author;
    let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    await client.query(queries.createAuthor, [
      id_author,
      name,
      surname,
      email,
      image
    ]);
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    client.release();
  }
  return result;
  }
  const updateAuthor = async (newData) => {
    let {id_author, name, surname, email, image} = newData;
    let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    await client.query(queries.updateAuthor, [
      id_author,
      name,
      surname,
      email,
      image
    ]);
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    client.release();
  }
  return result;
  }

  const deleteAuthor = async (email) => {
    let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    await client.query(queries.deleteAuthor, [
      email
    ]);
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    client.release();
  }
  return result;
  }
// const updateAuthor= async (newData) => {
//   let { id_entry, title, content, date, id_author, category } = newData;
//   let client, result;
//   try {
//     client = await pool.connect(); // Espera a abrir conexion
//     await client.query(queries.updateAuthor, [
//       id_entry,
//       title,
//       content,
//       date,
//       id_author,
//       category,
//     ]);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   } finally {
//     client.release();
//   }
//   return result;
// };

// const deleteAuthor = async (title) => {
//   let client, result;
//   try {
//     client = await pool.connect(); // Espera a abrir conexion
//     await client.query(queries.deleteAuthor, [
//       title,
//     ]);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   } finally {
//     client.release();
//   }
//   return result;
// };

module.exports = {
  getAllAuthors,
  getAuthorByEmail,
  createAuthor,
  updateAuthor,
  deleteAuthor
//   updateEntry,
//   deleteEntry
};