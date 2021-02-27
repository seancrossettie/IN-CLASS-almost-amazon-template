// FIXME: STUDENTS show your authors
import addAuthorForm from './forms/addAuthorForm';

const showAuthors = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS

  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card">
                                                    <div class="card-body">
                                                      ${item.first_name} ${item.last_name}
                                                    </div>
                                                  </div>`;
  });
  document.querySelector('#add-author-btn').addEventListener('click', addAuthorForm);
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
