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
        deleteTask(this.parentElement.id)
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
