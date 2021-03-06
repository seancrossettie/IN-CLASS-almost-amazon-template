import firebase from 'firebase/app';
import 'firebase/auth';
import addBookForm from '../components/forms/addBookForm';
import {
  createBook,
  deleteBook,
  getSingleBook,
  updateBook
} from '../helpers/data/bookData';
import { showBooks } from '../components/books';
import { createAuthor } from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';
import editBookForm from '../components/forms/editBookForm';
import formModal from '../components/forms/formModal';
import authorInfo from '../components/authorInfo';
import { authorBookInfo, deleteAuthorBooks } from '../helpers/data/authorBookData';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const firebaseKey = e.target.id.split('--')[1];
        deleteBook(firebaseKey).then((booksArray) => showBooks(booksArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
      addBookForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      console.warn('CLICKED SUBMIT BOOK', e.target.id);
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author').value,
        uid: firebase.auth().currentUser.uid,
      };

      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('CLICKED EDIT BOOK', e.target.id.split('--')[1]);
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Book');
      getSingleBook(firebaseKey).then((bookObject) => editBookForm(bookObject));
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author').value,
        uid: firebase.auth().currentUser.uid,
      };
      updateBook(firebaseKey, bookObject).then((booksArray) => showBooks(booksArray));

      $('#formModal').modal('toggle');
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      if (window.confirm('Want to delete?')) {
        const authorId = e.target.id.split('--')[1];
        console.warn(authorId);
        deleteAuthorBooks(authorId, uid).then((authorsArray) => showAuthors(authorsArray));
      }
    }
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-name')) {
      e.preventDefault();
      const authorObject = {
        first_name: document.querySelector('#first-name').value,
        last_name: document.querySelector('#last-name').value,
        email: document.querySelector('#email').value,
        uid: firebase.auth().currentUser.uid,
      };
      createAuthor(authorObject).then((authorArray) => showAuthors(authorArray));
    }

    if (e.target.id.includes('author-name-title')) {
      const authorId = e.target.id.split('--')[1];
      console.warn(authorId);
      authorBookInfo(authorId).then((authorInfoObject) => {
        authorInfo(authorInfoObject.author);
        showBooks(authorInfoObject.books);
      });
    }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default domEvents;
