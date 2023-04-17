class User {
    constructor(id, name, price, orther) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.orther = orther;
    }
  }
class App {
    renderUser(users) {
      let userTableTbody = document.querySelector('#tbody');
      let userTableBodyHtml = '';
      for (let user of users) {
        userTableBodyHtml += `<tr id="row${user.id}">
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.price}</td>
            <td>${user.orther}</td>
            <td>
              <button class="btn btn-edit" data-id="${user.id}">Edit</button>
              <button class="btn btn-delete" data-id="${user.id}" >Delete</button>
            </td>
          </tr>`;
      }
      userTableTbody.innerHTML = userTableBodyHtml;
    }
  }

let users = [];
let app = new App();
let userCreate = new User(1, 'Hộp bút', '30,000', 'lọ 50 cây bút bi');
users.push(userCreate);
app.renderUser(users);

let submitBtn = document.querySelector('#submit');
let editBtns = document.querySelectorAll('.btn-edit');

let nameEl = document.querySelector('#name');
let priceEl = document.querySelector('#price');
let ortherEl = document.querySelector('#orther');

let editId = '';

submitBtn.addEventListener('click', function () {
    if (editId) {
      let userEditIndex = users.findIndex((item) => item.id == editId);
      let userEdit = users[userEditIndex];
      userEdit.name = nameEl.value;
      userEdit.email = priceEl.value;
      userEdit.age = ortherEl.value;
      app.renderUser(users);
      // clear
      resetForm();
    } 
    else {
      let id = parseInt(Math.random() * 100);
      let userCreate = new User(id, nameEl.value, priceEl.value, ortherEl.value);
      users.push(userCreate);
      app.renderUser(users);
      resetForm();
    }
  });
  function resetForm() {
    nameEl.value = '';
    priceEl.value = '';
    ortherEl.value = '';
    editId = '';
  }
  
  editBtns.forEach((item) => {
    item.addEventListener('click', function () {
      editId = this.getAttribute('data-id');
      let userEditIndex = users.findIndex((item) => item.id == editId);
      let userEdit = users[userEditIndex];
      nameEl.value = userEdit.name;
      priceEl.value = userEdit.price;
      ortherEl.value = userEdit.orther;
    });
  });