document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const virtualFriend = createVirtualFriend(event.target);
  const virtualFriendsAll = document.querySelector('#virtual-friends');
  virtualFriendsAll.appendChild(virtualFriend);

  event.target.reset();
}

const createVirtualFriend = function (form) {
  const virtualFriend = document.createElement('li');
  virtualFriend.style.backgroundColor = generateColour(friendColours);
  virtualFriend.classList.add('virtual-friend-item');

  const name = document.createElement('h3');
  name.textContent = form.name.value;
  virtualFriend.appendChild(name);


  const profession = document.createElement('h4');
  profession.textContent = form.profession.value;
  virtualFriend.appendChild(profession);

  const look = document.createElement('h5');
  look.textContent = form.look.value;
  virtualFriend.appendChild(look);

  const greeting = document.createElement('h4');
  greeting.textContent = generateGreeting(friendGreetings, form.likes.value);
  virtualFriend.appendChild(greeting)

  return virtualFriend
}

const generateGreeting = function(greetings, interest) {
  const phrase = greetings[Math.floor(Math.random()*greetings.length)];
  if (phrase === greetings[3]) {return `"${phrase} ${interest}."`};
  return `"${phrase} ${interest}?"`
}

const friendGreetings = ['How about we grab some beers and chat about',
                         'Heeey! What\'s your take on',
                         'Good to see you! Thoughts on',
                         'Got a minute? Let me tell you about']

const generateColour = function(colours){
  return colours[Math.floor(Math.random()*colours.length)]
}

const friendColours = ['#FF4242',
                       '#FB62F6',
                       '#645DD7',
                       '#B3FFFC']

const handleDeleteAllClick = function (event) {
  const virtualFriends = document.querySelector('#virtual-friends');
  virtualFriends.innerHTML = ""
}
