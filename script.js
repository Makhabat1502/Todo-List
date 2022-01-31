const addTodo = document.querySelector(".btn");
const dropDown = document.querySelector("#drop-down");
const myTodo = document.querySelector(".todo-list");

addTodo.addEventListener("click", function () {
    let myList = document.createElement("div");
    myList.classList.add("todo-item");
    myList.innerText = dropDown.value;
    myTodo.appendChild(myList);
    dropDown.value = "";
  

    myList.addEventListener("click", function () {
      myTodo.removeChild(myList);
    });
  });