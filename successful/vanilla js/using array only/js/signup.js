/**
 *
 * @param {Event} event
 */
const users = [];

function getUsers() {
  return users;
}

function handleSubmit(event) {
  event.preventDefault();
  console.log('Call success');

  const user = {
    id: null,
    name: null,
    userName: null,
    password: null,
  };

  console.log('user' + Object.values(user));
  const name = document.getElementById('name').value;
  const userName = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log(name, userName, password);
  user.id = users.length + 1;
  user.name = name;
  user.userName = userName;
  user.password = password;

  console.log('saved user' + Object.values(user));
  /* Save user into array */
  //users.push({ name, userName, password});
  users.push({ ...user });
  //users.push(user);
  console.log(users);

  //set data into local storage
  // localStorage.setItem('user', { name, userName, password });

  // // read from local storage
  // const userStorage = localStorage.getItem('user');

  // console.log(Object.values(userStorage));

  /* render/rerender table with updated data */
  showTable();

  /* resetting the sign up form */
  document.getElementById('signupForm').reset();
  document.getElementById('message').innerHTML = `Registration success`;
}

function handleUpdate(event) {
  event.preventDefault();
  console.log('update Call success');

  // const user = {
  //   id: null,
  //   name: null,
  //   userName: null,
  //   password: null,
  // };

  const id = document.getElementById('id').value;
  console.log('updating user id' + id);
  //console.log('user' + Object.values(user));
  const name = document.getElementById('name').value;
  const userName = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log('updated values' + name, userName, password);

  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  console.log('updating user id index ', userIndex, ' user id ', id);

  /* update the use property values */
  users[userIndex].name = name;
  users[userIndex].userName = userName;
  users[userIndex].password = password;

  // console.log('updated array ' + users);

  /* rerender table with updated data */
  showTable();
  /* hide update button and show sign up button */ const signupButton =
    document.getElementById('signupButton');
  const updateButton = document.getElementById('updateButton');
  signupButton.style.display = 'block';
  updateButton.style.display = 'none';

  document.getElementById('signupForm').reset();
  document.getElementById('message').innerHTML = `Update success`;
}
