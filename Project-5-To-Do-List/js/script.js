// VARIABLES
const addTask = document.querySelector("#add-task");
const taskContainer = document.querySelector("#task-container");
const inputTask = document.querySelector("#input-task");

// EVENT LISTNER FOR ADD BUTTON
addTask.addEventListener("click", function () {
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add("check-task");
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add("delete-task");
    task.appendChild(deleteBtn);

    if (inputTask.value === "") {
        alert("Please Enter a Task");
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    checkBtn.addEventListener("click", function () {
        checkBtn.parentElement.style.textDecoration = "line-through";
    });
    deleteBtn.addEventListener("click", function (e) {
        e.target.closest(".task").remove();
    });
});
