console.log('Hello!');

let nameElement = document.getElementById('name');
let ageElement = document.getElementById('age');
let saveBtn = document.getElementById('saveBtn');
let tbody = document.getElementById('tbody');
let nameValue = ''; //Khai báo rỗng
let ageValue = '';

saveBtn.addEventListener('click', function () {
  nameValue = nameElement.value; //Nhận giá trị khi nhập vào ô input
  ageValue = ageElement.value;
  let tbodyHtml = `<tr id="row">
  <td>${nameValue}</td>
  <td>${ageValue}</td>
  <td>
    <button class="edit" id="editBtn">Edit</button>
    <button class="delete" id="deleteBtn">Delete</button>
  </td>
</tr>`;
  tbody.innerHTML = tbodyHtml;
  //Xóa giá trị trong ô input sau khi bấm save
  nameElement.value = '';
  ageElement.value = '';
  //Set button delete
  let deleteBtn = document.getElementById('deleteBtn');
  deleteBtn.addEventListener('click', function () {
    let row = document.getElementById('row');
    row.remove();
  });

  //Set button edit
  let editBtn = document.getElementById('editBtn');
  editBtn.addEventListener('click', function () {
    nameElement.value = nameValue;
    ageElement.value = ageValue;
  });
});
