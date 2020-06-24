





  var shoppingList = document.querySelector('.shopping-list');



///////////////
//Shopping app

var captureToDo = (e) => {
  e.preventDefault();
  var toDo = document.querySelector("input").value;

  if(toDo != '') {
    addNewToDo(toDo);
  }
  toDo.value = '';
};


//Adds to Do to DOM
var addNewToDo = (newToDo) => {
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
}


// Deletes to Do
var deleteToDo = (event) => {
  console.log(this);
  var remove = event.target.parentNode.parentNode.parentNode;
  console.log(remove);
  var item = remove.parentNode;
  console.log(item);
  item.removeChild(remove);
}


//Loads Event listeners
loadListeners();

// function holds listeners
function loadListeners() {
  document.getElementById('js-shopping-list-form').addEventListener('submit', captureToDo);
  document.querySelector('.shopping-item-delete').addEventListener('click', deleteToDo);
}
