import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => getBooks().then((booksArray) => resolve(booksArray)))
    .catch((error) => reject(error));
});

// FILTER ON SALE BOOKS
const getSellBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="sale"&equalTo=true`)
    .then((response) => {
      const salesBooksArray = Object.values(response.data);
      resolve(salesBooksArray);
    }).catch((error) => reject(error));
});

// CREATE BOOK
const createBook = (bookObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, bookObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getBooks().then((booksArray) => resolve(booksArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE BOOK
const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/${firebaseKey}.json?`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UPDATE BOOKS
const updateBook = (firebaseKey, bookObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/books/${firebaseKey}.json`, bookObject)
    .then(() => getBooks(firebase.auth().currentUser.uid)).then((booksArray) => resolve(booksArray))
    .catch((error) => reject(error));
});

// SEARCH BOOKS

// GET ALL AUTHORS BOOKS
const getAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  axios(`${dbUrl}/books.json?orderBy="author_id"&=equalTo="${authorId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getBooks,
  createBook,
  deleteBook,
  getSellBooks,
  getSingleBook,
  updateBook,
  getAuthorBooks,
};
