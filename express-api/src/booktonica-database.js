const pgp = require('pg-promise')();

/**
 * An object that has methods matching useful database queries.
 * Use `this.db` to access a connected pg-promise connection.
 * Make sure to return the promise!
 *
 * For examples of other queries, see
 * [pghttps://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example
 */
class BooktonicaDatabase {
  /**
   * @param {String} name - name of database to connect to
   */
  constructor(name) {
    const connectionString = `postgres://localhost:5432/${name}`;
    console.log('Postgres DB => ', connectionString);
    this.db = pgp(connectionString);
  }

  sanityCheck() {
    console.log('\tTesting database connection...');
    return this.getBooksCount().then(count =>
      console.log(`\t✔️ Found ${count} books.`)
    );
  }

  getBooksCount() {
    return this.db.one('SELECT count(*) FROM books').then(r => r.count);
  }

  // ordered by id of book
  getAllBooks(extraClauses = "", args) {
    return this.db.any(
      `SELECT 
        b.id,
        b.title,
        b.subtitle,
        b.summary,
        b.cover_image_url,
        to_char(b.publication_date, 'DD Mon YYYY') as publication_date, 
        a.name AS author_name FROM books b 
        INNER JOIN authors a on a.id = b.author_id
        ` +
        extraClauses +
        `ORDER BY b.id`, args
    );
  }

  getBookListsofBook(bookID) {
    return this.db.any(
      `SELECT 
      bl.id,
    	bl.list_name
    	FROM booklist bl
    		JOIN books_in_booklist bib ON bl.id = bib.booklist_id
    		JOIN books b ON bib.book_id = b.id
    	WHERE b.id = $1`, bookID
    );
  }

  getBooksFromBooklist(booklistID) {
    let extraClauses =  `INNER JOIN books_in_booklist bib ON bib.book_id = b.id
    WHERE bib.booklist_id = $1`
    return this.getAllBooks(extraClauses, booklistID);
  }
}

module.exports = BooktonicaDatabase;
