const queries = {
  getAllEntries: `
                  SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
                  FROM entries AS e
                  INNER JOIN authors AS a
                  ON e.id_author=a.id_author`,
  updateEntry: `
                UPDATE entries
                SET id_entry = $1, content = $3, date = $4, id_author = $5, category = $6
                WHERE title = $2`,
  deleteEntry: `
                DELETE FROM entries
                WHERE title=$1`,
};

module.exports = queries;
