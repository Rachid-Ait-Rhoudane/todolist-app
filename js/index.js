let taskForm = document.forms.taskForm;

let tasks = localStorage.getItem("tasks") ?? [];

if(!Array.isArray(tasks)) {
    tasks = JSON.parse(tasks);
}

let task_id = 1;
tasks.forEach(task => {
    showTask(task.title, task_id);
    task_id++;
});

taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    showTask(taskForm.task.value, tasks.length + 1);
    storeTask(taskForm.task.value, tasks.length + 1);
});

let confirmModel = document.querySelector(".model-wrapper");

let confirm = document.querySelector(".model-wrapper .confirm-model .confirm-model-buttons .confirm");
confirm.addEventListener("click", function () {
    deleteTask(task_id);
    confirmModel.style.opacity = 0;
    confirmModel.style.zIndex = -1;
});

let cancel = document.querySelector(".model-wrapper .confirm-model .confirm-model-buttons .cancel");
cancel.addEventListener("click", function() {
    confirmModel.style.opacity = 0;
    confirmModel.style.zIndex = -1;
});

function showTask(taskTitle, id){
    
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.id = id;

    let taskP = document.createElement("p");
    taskP.className = "task-description";
    let taskPTxt = document.createTextNode(taskTitle);
    taskP.appendChild(taskPTxt);

    let btnDelete = document.createElement("button");
    btnDelete.className = "btn-delete";
    let btnDeleteTxt = document.createTextNode("Delete");
    btnDelete.appendChild(btnDeleteTxt);
    btnDelete.addEventListener("click", function() {
        task_id = this.parentElement.id;
        confirmModel.style.zIndex = 1;
        confirmModel.style.opacity = 1;
    });

    taskDiv.appendChild(taskP);
    taskDiv.appendChild(btnDelete);

    document.querySelector(".wrapper .show-tasks").appendChild(taskDiv);
}

function storeTask(taskTitle, id){
    tasks.push({
        id: id,
        title: taskTitle
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(id) {

    if(tasks.length > 1) {
        tasks.forEach( (task, index) => {
            if(task.id == id){
                tasks.splice(index, 1);
            }
        })
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
        tasks.splice(0, 1);
        localStorage.removeItem("tasks");
    }

    document.getElementById(id).remove();
}
