const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
  <form id="submit-author-form" class="mb-4">
    <div class="form-group">
      <label for="title">First Name</label>
      <input type="text" class="form-control" id="first-name" aria-describedby="firstName" placeholder="Enter First Name" required>
    </div>
    <div class="form-group">
      <label for="title">Last Name</label>
      <input type="text" class="form-control" id="last-name" aria-describedby="lastName" placeholder="Enter Last Name" required>
    </div>
    <div class="form-group">
    <label for="title">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Email" required>
  </div>
    <button type="submit" id="submit-name" class="btn btn-primary">Submit Author</button>
  </form>`;
};

export default addAuthorForm;
