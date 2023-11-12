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

module.exports = {
    getAllEntries
};

//Pruebas SQL:
// getAllEntries().then((data) => console.log(data));