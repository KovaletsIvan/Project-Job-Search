let online = navigator.onLine;

let localUser = JSON.parse(localStorage.getItem("New_User")) || [];

function saveUser() {
  let newUser = {};
  let formData = document.getElementById("userForm").elements;
  for (let i = 0; i < formData.length - 1; i++) {
    newUser[formData[i].name] = formData[i].value;
  }
  localUser.push(newUser);
  localStorage.setItem("New_User", JSON.stringify(localUser));
}
function al() {
  alert("Your data wos sent successfully");
}
let sub = document.getElementById("submit");
sub.addEventListener("click", saveUser);
sub.addEventListener("click", check);

function check() {
  if (online === true) {
    alert("Success");
  } else {
    alert("Your data will be saved in Local Storeg");
  }
}

function checkLocal() {
  let el = localStorage.getItem("New_User");
  let user = {};
  let info = document.getElementById("info");
  if (el && el.length > 0) {
    let formData = document.getElementById("userForm");
    let element = JSON.parse(el);
    let nameProp = Object.getOwnPropertyNames(element[0]);
    let prop = Object.values(element[0]);

    for (let i = 0; i < nameProp.length - 1; i++) {
      user[nameProp[i]] = prop[i];
      formData[i].innerHTML = ("value", prop[i]);
      if (online != true) {
        info.innerHTML = Object.values(user);
      }

      console.log(formData[i].textContent);
    }

    console.log(user);
    console.log(Object.values(user));
  }
}
function delItem() {
  localStorage.clear();
}
let clear = document.getElementById("clear");
clear.addEventListener("click", delItem);
let getData = document.getElementById("getData");
getData.addEventListener("click", checkLocal);
if (online == true) {
  divClear.remove();
}
