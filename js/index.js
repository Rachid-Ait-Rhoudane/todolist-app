// get and show All tasks
let tasksWrapper = document.querySelector("main .tasks");

let tasks = localStorage.getItem("tasks") ?? [];

if(!Array.isArray(tasks)) {
    tasks = JSON.parse(tasks);
}

let taskId = 1;
for(let task of tasks) {
    showTask(taskId, task.title, task.description);
    taskId++;
}

// Add New Task
let addNewTaskButton = document.querySelector("main .actions .add-new-task");

let addNewTaskModal = document.querySelector("#add-new-task .modal");

let newTaskTitle = document.querySelector("#add-new-task .modal-content .task-title input");

let newTaskDescription = document.querySelector("#add-new-task .modal-content .task-description textarea");

let addModalCancelButton = document.querySelector("#add-new-task .modal-buttons .cancel");

let addModalSaveButton = document.querySelector("#add-new-task .modal-buttons .save");

addNewTaskButton.addEventListener("click", function() {
    addNewTaskModal.parentNode.style.zIndex = 99;
    addNewTaskModal.parentNode.style.backgroundColor = "rgba(0,0,0,0.5)";
    addNewTaskModal.style.top = "50%";
});

addModalCancelButton.addEventListener("click", function () {
    closeAddNewtaskModal();
});

addModalSaveButton.addEventListener("click", function () {

    let newTask = {
        id: taskId,
        title: newTaskTitle.value,
        description: newTaskDescription.value
    };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    closeAddNewtaskModal();

    showTask(newTask.id, newTask.title, newTask.description);

    taskId++;

});

//Delete All Tasks
let deleteAllButton = document.querySelector("main .actions .delete-all");

let deleteAllModal = document.querySelector("#delete-all .modal");

let DeleteAllCancel = document.querySelector("#delete-all .modal-buttons .cancel");

let DeleteAllSave = document.querySelector("#delete-all .modal-buttons .save");

deleteAllButton.addEventListener("click", function () {
    deleteAllModal.parentNode.style.zIndex = 99;
    deleteAllModal.parentNode.style.backgroundColor = "rgba(0,0,0,0.5)";
    deleteAllModal.style.top = "50%";
});

DeleteAllCancel.addEventListener("click", function () {
    closedeleteAllModal()
});

DeleteAllSave.addEventListener("click", function () {

    let shownTasks = Array.from(tasksWrapper.childNodes);

    for(let task of shownTasks) {
        task.remove();
    }

    localStorage.removeItem("tasks");

    tasks = [];

    closedeleteAllModal()

});


function showTask (id, title, description) {

    let task = document.createElement("div");
    task.className = "task";
    task.setAttribute("id", id);

    let taskHeader = document.createElement("div");
    taskHeader.className = "task-header";

    let taskTitle = document.createElement("h3");
    taskTitle.className = "title";
    let titleTxt = document.createTextNode(title);
    taskTitle.appendChild(titleTxt);
    taskHeader.appendChild(taskTitle);

    let taskActions = document.createElement("div");
    taskActions.className = "actions";
    let editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen-to-square";
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";
    taskActions.appendChild(editIcon);
    taskActions.appendChild(deleteIcon);
    taskHeader.appendChild(taskActions);

    let taskDescription = document.createElement("p");
    taskDescription.className = "task-description";
    let descriptionTxt = document.createTextNode(description);
    taskDescription.appendChild(descriptionTxt);

    task.appendChild(taskHeader);
    task.appendChild(taskDescription);
    
    tasksWrapper.appendChild(task);
}

function closeAddNewtaskModal() {
    newTaskTitle.value = "";
    newTaskDescription.value = "";
    addNewTaskModal.style.top = "-50%";
    setTimeout(() => {
        addNewTaskModal.parentNode.style.zIndex = -1;
        addNewTaskModal.parentNode.style.backgroundColor = "transparent";
    }, 500);
}

function closedeleteAllModal() {
    deleteAllModal.style.top = "-50%";
    setTimeout(() => {
        deleteAllModal.parentNode.style.zIndex = -1;
        deleteAllModal.parentNode.style.backgroundColor = "transparent";
    }, 500);
}