document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButtom.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const recordCollectionItem = createRecordCollectionItem(event.target);
  const recordCollection = document.querySelector('#record-collection');
  recordCollection.appendChild(recordCollectionItem);

  event.target.reset();
}

const createRecordCollectionItem = function (form) {
  const recordCollectionItem = document.createElement('li');
  recordCollectionItem.classList.add('record-collection-item');

  const title = document.createElement('h3');
  title.textContent = form.title.value;
  recordCollectionItem.appendChild(title);

  const artist = document.createElement('h3');
  artist.textContent = form.artist.value;
  recordCollectionItem.appendChild(artist);

  const genre = document.createElement('h4');
  genre.textContent = form.genre.value;
  recordCollectionItem.appendChild(genre);

  const type = document.createElement('h4');
  type.textContent = form.type.value;
  recordCollectionItem.appendChild(type);

  return recordCollectionItem
}
