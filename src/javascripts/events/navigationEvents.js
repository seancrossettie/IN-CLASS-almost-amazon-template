import firebase from 'firebase/app';
import 'firebase/auth';
import signOut from '../helpers/auth/signOut';
import { getAuthors } from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';
import { getBooks, getSellBooks } from '../helpers/data/bookData';
import { showBooks } from '../components/books';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    console.warn('Sale Books');
    getSellBooks().then((booksArray) => showBooks(booksArray));
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(firebase.auth().currentUser.uid).then((booksArray) => showBooks(booksArray));
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(uid).then((authors) => showAuthors(authors));
  });
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
};

export default navigationEvents;
