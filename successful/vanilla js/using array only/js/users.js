function getUsersCameFromSignup() {
  console.log('users array length came from signup' + usersArray.length);
  return getUsers();
}
const usersArray = getUsers();
console.log(usersArray.length);

function showTable() {
  /* access the users table */
  const userTable = document.getElementById('userTable');
  console.log('CLicked/call');
  /* display the table */
  userTable.style.display = 'block';

  /* Access the table body */
  const tableBody = document.getElementById('tableBody');
  //clear all previous child because browser is not reloaded
  tableBody.textContent = '';

  /* create row, td and text nodes action based users array. 
     then append it to table body  */
  users.map((user, index) => {
    /* Create a new table row <tr> for each user: */
    const row = document.createElement('tr');

    /* 
      add serial number 
    */
    {
      /* Create a <td> to add edit button for each user */
      const cell = document.createElement('td');
      cell.textContent = index + 1;
      row.appendChild(cell);
    }

    Object.values(user).forEach((value) => {
      /* Create a <td> for each property of the user object: */

      const cell = document.createElement('td');
      /* Create text content with user property value */
      cell.textContent = value;
      /* append the newly created text node into <td> element */
      row.appendChild(cell);
    });

    /* 
      add edit button 
    */
    {
      /* Create a <td> to add edit button for each user */
      const cell = document.createElement('td');
      /* Create button and add attributes */
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.type = 'button';
      /* add event to button */
      addClickEvent(editButton, 'I m edit button', editUser, index + 1);
      cell.appendChild(editButton);
      row.appendChild(cell);
    }

    /* 
      add delete button 
    */
    {
      /* Create a <td> to add delete button for each user */
      const cell = document.createElement('td');
      /* Create button and add attributes */
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.type = 'button';
      /* add event to button */
      addClickEvent(deleteButton, 'I m delete button', deleteUser, index + 1);
      cell.appendChild(deleteButton);
      row.appendChild(cell);
    }

    /* Append the row to the table body: */
    tableBody.appendChild(row);
  });
}

function addClickEvent(btn, msg, callBackfunction, id) {
  return btn.addEventListener(
    'click',
    function () {
      console.log(`${msg} `);
      callBackfunction(id);
    },
    false
  );
}

function editUser(id) {
  console.log('From edit function with id ' + id);
  /* get the user by id */
  const user = users.find((user) => user.id === id);
  console.log(JSON.stringify(user));
  /* get form fields */
  const idField = document.getElementById('id');
  const name = document.getElementById('name');
  const userName = document.getElementById('username');
  const password = document.getElementById('password');

  /* display user in form fields */
  idField.value = user.id;
  name.value = user.name;
  userName.value = user.userName;
  password.value = user.password;

  const signupButton = document.getElementById('signupButton');
  signupButton.style.display = 'none';

  const updateButton = document.getElementById('updateButton');
  updateButton.style.display = 'block';
}

function deleteUser(id) {
  console.log('From delete function with id ' + id);
  /* get the user by id */
  const user = users.find((user) => user.id === id);
  console.log(JSON.stringify(user));

  const confirmDelete = confirm(`R u sure u want to delete  ${user.name} ??`);
  console.log('delete confirm ' + confirmDelete);
  /* remove user from array */
  if (confirmDelete) {
    const indexToRemove = users.findIndex((user) => user.id === parseInt(id));

    if (indexToRemove !== -1) {
      users.splice(indexToRemove, 1);
    }

    /* show success message */
    document.getElementById(
      'message'
    ).innerHTML = `user ${user.name} is deleted successfully
    `;
    /* rerender table with updated data */
    showTable();
  }
}
