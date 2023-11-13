const queries = {
    getAllAuthors: `SELECT *
    FROM authors`,
    getAuthorByEmail: `SELECT *
    FROM authors
    WHERE email=$1`,
    createAuthor: `INSERT INTO authors (id_author, name, surname, email, image)
    VALUES ($1, $2, $3, $4, $5)`,
    updateAuthor: `UPDATE authors
    SET id_author = $1, name = $2, surname = $3, email = $4, image = $5
    WHERE id_author = $1`,
    deleteAuthor: `DELETE FROM authors
    WHERE email = $1`
  
    // updateEntry: `UPDATE entries
    //   SET id_entry = $1, content = $3, date = $4, id_author = $5, category = $6
    //   WHERE title = $2`,
    //   deleteEntry: `DELETE FROM entries
    //   WHERE title=$1`
  };
  
  module.exports = queries;