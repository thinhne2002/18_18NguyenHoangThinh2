console.log("Jquery Ajax");
const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
function data() {
  $.ajax({ method: "GET", url: urlBacon, dataType: "json" })
    .done(function (data) {
      console.log("Success");
      console.log(data);
    })
    .fail(function () {
      console.log("Can't get data");
    });
}
data();
console.log("https://api.jquery.com/jquery.ajax/");
function data1() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    beforeSend: function (xhr) {
      xhr.overrideMimeType("text/plain; charset=x-user-defined");
    },
  }).done(function (data) {
    if (console && console.log) {
      console.log("Sample of data:", data.slice(0, 100));
    }
  });
}
data1();
console.log("XMLHttpRequest RESTful GET");
var url = "https://jsonplaceholder.typicode.com/todos";
function getalluser() {
  //var url = 'https://jsonplaceholder.typicode.com/todos';
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(users);
    } else {
      console.error(users);
    }
  };
  xhr.send(null);
}
getalluser();
console.log("Get a user");
function getauser() {
  var url = "https://jsonplaceholder.typicode.com/todos";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url + "/1", true);
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(users);
    } else {
      console.error(users);
    }
  };
  xhr.send(null);
}
getauser();
console.log("Post a user");
// var url = "http://localhost:8080/api/v1/users";
function Postauser() {
  var url = "https://my-json-server.typicode.com/typicode/demo/posts";
  var data = {};
  data.firstname = "John";
  data.lastname = "Snow";
  var json = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
      console.table(users);
    } else {
      console.error(users);
    }
  };
  xhr.send(json);
}
Postauser();
console.log("Update a user");
// var url = "http://localhost:8080/api/v1/users";
function updateauser() {
  var url = "https://jsonplaceholder.typicode.com/todos";
  var data = {};
  data.firstname = "John2";
  data.lastname = "Snow2";
  var json = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url + "/12", true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(users);
    } else {
      console.error(users);
    }
  };
  xhr.send(json);
}
updateauser();
console.log("Delete a user");
// var url = "http://localhost:8080/api/v1/users";
function deleteauser() {
  var index = Math.floor(Math.random() * 10);
  var url = "https://jsonplaceholder.typicode.com/todos";
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url + `/${index}`, true);
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.log("Success");
      console.table(users);
    } else {
      console.error(users);
    }
  };
  xhr.send(null);
}
deleteauser();
