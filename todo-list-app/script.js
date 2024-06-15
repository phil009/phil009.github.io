window.addEventListener("load", () => {
    const form = document.getElementById("new-task-form");
    const input = document.getElementById("new-task-input");
    const taskList = document.querySelector(".tasks-container");
    const numOfTasks = document.getElementById("num-of-tasks");
    const completedTasks = document.getElementById("completed-tasks");
    const emptyTaskList = document.querySelector(".empty-task-list");

    let taskCount = 0;
    let completedCount = 0;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const task = input.value.trim();

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const taskElement = document.createElement("div");
        taskElement.classList.add("item");

        const leftSide = document.createElement("div");
        leftSide.classList.add("left");
        taskElement.appendChild(leftSide);

        const checkTask = document.createElement("div");
        checkTask.classList.add("check-task");
        leftSide.appendChild(checkTask);

        const taskDesc = document.createElement("div");
        taskDesc.classList.add("task-desc");
        taskElement.appendChild(taskDesc);

        const taskInput = document.createElement("input");
        taskInput.classList.add("text");
        taskInput.value = task;
        taskInput.type = "text";
        taskInput.setAttribute("readonly", "readonly");
        taskDesc.appendChild(taskInput);

        const taskControls = document.createElement("div");
        taskControls.classList.add("controls");
        taskElement.appendChild(taskControls);

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8" />
                            </svg>`;
        taskControls.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" />
                            </svg>`;
        taskControls.appendChild(deleteBtn);

        taskList.appendChild(taskElement);
        input.value = "";

        taskCount++;
        updateTaskCounts();
        toggleEmptyTaskListMessage();

        editBtn.addEventListener("click", () => {
            if (taskInput.hasAttribute("readonly")) {
                taskInput.removeAttribute("readonly");
                taskInput.focus();
                editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m13.353 1.146l1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13zM2 2v12h12V3.208L12.793 2H11v4H4V2zm6 0v3h2V2z" clip-rule="evenodd"/></svg>`;
            } else {
                taskInput.setAttribute("readonly", "readonly");
                editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8" />
                            </svg>`;
            }
        });

        deleteBtn.addEventListener("click", () => {
            if (taskElement.classList.contains("completed")) {
                completedCount--;
            }
            taskList.removeChild(taskElement);
            taskCount--;
            updateTaskCounts();
            toggleEmptyTaskListMessage();
        });

        checkTask.addEventListener("click", () => {
            taskInput.classList.toggle("complete");
            checkTask.classList.toggle("complete");
            taskElement.classList.toggle("completed");
            if (taskElement.classList.contains("completed")) {
                completedCount++;
            } else {
                completedCount--;
            }
            updateTaskCounts();
        });
    });

    function updateTaskCounts() {
        numOfTasks.textContent = taskCount;
        completedTasks.textContent = `${completedCount}/${taskCount}`;
    }

    function toggleEmptyTaskListMessage() {
        if (taskCount === 0) {
            emptyTaskList.style.display = "block";
        } else {
            emptyTaskList.style.display = "none";
        }
    }

    toggleEmptyTaskListMessage();
});
