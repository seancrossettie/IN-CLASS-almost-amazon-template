import signOut from '../helpers/signOut';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', () => {
    signOut();
    document.querySelector('#navigation').innerHTML = '';
    document.querySelector('#store').innerHTML = '';
  });

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    console.warn('Sale Books');
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    console.warn('All Books');
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
    // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
    // OTHERWISE SHOW THE STORE

    // WHEN THE USER PRESSES ENTER, CLEAR THE INPUT
    if (e.keyCode === 13) {
      document.querySelector('#search').value = '';
    }
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
};

export default navigationEvents;
