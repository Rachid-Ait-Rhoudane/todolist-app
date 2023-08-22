let taskForm = document.forms.taskForm;

let tasks = localStorage.getItem("tasks") ?? [];

if(!Array.isArray(tasks)) {
    tasks = tasks.split(",").map( ele => {
        let obj = JSON.parse(ele.replace('|', ','));
        obj.toString = function() {
            return `{"id": "${this.id}"|"title": "${this.title}"}`;
        }
        return obj;
    });
}

let task_id = 1;
tasks.forEach(task => {
    createTask(task.title, task_id);
    task_id++;
});

taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    createTask(taskForm.task.value, tasks.length + 1);
    storeTask(taskForm.task.value, tasks.length + 1);
});

function createTask(taskTitle, id){
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
        title: taskTitle,
        toString() {
            return `{"id": "${this.id}"|"title": "${this.title}"}`;
        }
    });

    localStorage.setItem("tasks", tasks);
}

function deleteTask(id) {

    tasks.forEach( (task, index) => {
        if(task.id == id){
            tasks.splice(index, 1);
        }
    })

    document.getElementById(id).remove();

    localStorage.setItem("tasks", tasks);
}
