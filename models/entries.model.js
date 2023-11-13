const queries = require("../queries/entries.queries");
//Datos de conexion a BBDD
const pool = require("../config/db_pgsql");

const getAllEntries = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllEntries);
    result = data.rows;
  } catch (error) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};
const updateEntry = async (newData) => {
  let { id_entry, title, content, date, id_author, category } = newData;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    await client.query(queries.updateEntry, [
      id_entry,
      title,
      content,
      date,
      id_author,
      category,
    ]);
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    client.release();
  }
  return result;
};

const deleteEntry = async (title) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    await client.query(queries.deleteEntry, [
      title,
    ]);
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    client.release();
  }
  return result;
};

module.exports = {
  getAllEntries,
  updateEntry,
  deleteEntry
};

//Pruebas SQL:
// getAllEntries().then((data) => console.log(data));
