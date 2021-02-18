const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="book-container">
    <div id="add-button"></div>
    <div id="store"></div>
    <div id="cart-modal"></div>
  </div>`;
};

export default domBuilder;
