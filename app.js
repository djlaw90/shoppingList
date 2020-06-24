




var shoppingList = document.querySelector('.shopping-list');
var form = document.getElementById("js-shopping-list-form");
var deleteButtons = document.getElementsByClassName('shopping-item-delete');


///////////////
//Shopping app
var captureListItem = (e) => {
  e.preventDefault();
  var listInput = document.querySelector("input");
  var listItem = document.querySelector("input").value;

  if(listItem !== '') {
    addNewListItem(listItem);
    listItem = '';
    form.reset();
    listInput.focus();
  }
};

function createDeleteButtonListeners(){
  for(var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteListItem);
  }
};

// Deletes list item
function deleteListItem(e) {
  console.log("clicked delete");
  for (let i = 0; i < deleteButtons.length; i++) {
      let itemToDelete = this.parentElement.parentElement;
      console.log(itemToDelete, 'item to delete');
      itemToDelete.remove();
  }
};

//Adds list Item to DOM
var addNewListItem = (newToDo) => {
  var li = document.createElement('li');
  //Creates HTML for new toDo
  li.innerHTML =
  `<span class="shopping-item">${newToDo}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>`

  shoppingList.appendChild(li);
  createDeleteButtonListeners();
};

// function holds listeners
function loadListeners() {
  //Takes the HTML list of deleteButtons and adds the delete event listener
  createDeleteButtonListeners();
  form.addEventListener('submit', captureListItem);
};

//Loads Event listeners
loadListeners();
