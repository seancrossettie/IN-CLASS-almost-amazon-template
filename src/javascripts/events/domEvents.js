const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
      }
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('edit-book')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
    }

  // ADDCLICK EVENT FOR DELETING AN AUTHOR
  });
};

export default domEvents;
