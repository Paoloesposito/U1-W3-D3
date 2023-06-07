function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Scrivi qualcosa!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.appendChild(document.createTextNode(task));
    taskText.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Elimina"));
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    input.value = "";
}
