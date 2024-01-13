/**
 *
 * @param {Event} event
 */
const users = [];

function handleSubmit(event) {
  event.preventDefault();
  console.log('Call success');

  const user = {
    name: null,
    userName: null,
    password: null,
  };

  console.log('user' + Object.values(user));
  const name = document.getElementById('name').value;
  const userName = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log(name, userName, password);

  user.name = name;
  user.userName = userName;
  user.password = password;

  console.log('saved user' + Object.values(user));

  //users.push({ name, userName, password});
  users.push({ ...user });
  //users.push(user);
  console.log(users);

  //set data into local storage
  // localStorage.setItem('user', { name, userName, password });

  // // read from local storage
  // const userStorage = localStorage.getItem('user');

  // console.log(Object.values(userStorage));
}
