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
  // gets all books by default but can be limited (eg. to show books from a particular list)
  async getAllBooks(extraClauses = "", args) {
    let books = await this.db.any(
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
    let booklists = await this.getAllBooklists();

    // temporary storage to house arrays of all books (including books that aren't in any list)
    let tempBooklist = {}

    // create an empty array for each book (determines whether badge should appear in bookCard)
    books.forEach(book => tempBooklist[book.id] = []);

    // add booklist entry into temp storage booklist key
    booklists.forEach(entry => {
      // if there was a WHERE clause for getAllBooks(), then getAllBooklists would have too much data so skip entries for books we don't have
      if (tempBooklist[entry.book_id]) {
        tempBooklist[entry.book_id].push({list_id: entry.list_id, list_name: entry.list_name})
      }
    })

    // modify books to add booklist
    books.forEach(book => {
      book.booklists = tempBooklist[book.id]
    });
    return books;
  }

  getBooksFromBooklist(booklistID) {
    let extraClauses =  `INNER JOIN books_in_booklist bib ON bib.book_id = b.id
    WHERE bib.booklist_id = $1`
    return this.getAllBooks(extraClauses, booklistID);
  }

  getAllBooklists() {
    return this.db.any(
      `SELECT
      b.id AS book_id,
      bl.id AS list_id,
      bl.list_name
      FROM books b
      INNER JOIN books_in_booklist bib ON bib.book_id = b.id
      INNER JOIN booklist bl ON bl.id = bib.booklist_id
      ORDER BY b.id`
    )
  }
}

module.exports = BooktonicaDatabase;
