import { deleteAuthor, getSingleAuthor } from './authorData';
import { getAuthorBooks, deleteBook } from './bookData';
// Delete Author and all their books

const deleteAuthorBooks = (authorId, uid) => new Promise((resolve, reject) => {
  getAuthorBooks(authorId).then((authorBooksArray) => {
    const deleteBooks = authorBooksArray.map((book) => deleteBook(book.firebaseKey));
    console.warn(deleteBooks);

    Promise.all(deleteBooks).then(() => resolve(deleteAuthor(authorId, uid)));
  }).catch((error) => reject(error));
});

const authorBookInfo = (authorId) => new Promise((resolve, reject) => {
  const author = getSingleAuthor(authorId);
  const authorBooks = getAuthorBooks(authorId);

  console.warn(author, authorBooks);

  Promise.all([author, authorBooks])
    .then(([authorResponse, authorsBookResponse]) => resolve(
      { author: authorResponse, books: authorsBookResponse }
    ))
    .catch((error) => reject(error));
});

export { deleteAuthorBooks, authorBookInfo };
