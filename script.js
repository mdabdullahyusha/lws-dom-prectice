/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */

/*





Here Comes My Prectice





*/
// console.dir(document);
// document.title = "Hello Labiba!";

// console.dir(document.all[6]);
// console.log(document.getElementById("new-task"));

// let headerElement = document.getElementById("header");
// console.log(headerElement.textContent);
// console.log(headerElement.innerText);

// let grandParent = document.querySelector(".todo-list");
// let parent = grandParent.children;
// console.log(parent[0]);

// to do list
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let toDoUL = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

// functions
let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  toDoUL.appendChild(listItem);
  newTask.value = "";

  //   Bind new li to incomplete list
  bindInCompleteItems(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};

let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindInCompleteItems = function (taskItem, checkboxClick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

let bindCompleteItems = function (taskItem, deleteButtonClick) {
  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonClick;
};

for (let i = 0; i < toDoUL.children.length; i++) {
  bindInCompleteItems(toDoUL.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
