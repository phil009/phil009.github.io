window.addEventListener('load', () => {

    const form = document.getElementById('new-task-form');
    const input = document.getElementById('new-task-input');
    const taskList = document.querySelector('.tasks-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const task = input.value;

        if (!task) {
            alert('Please fill out the task');
            return;
        }

        const taskElement = document.createElement('div');
        taskElement.classList.add('item');

        const leftSide = document.createElement('div');
        leftSide.classList.add('left');
        taskElement.appendChild(leftSide);


        const checkTask = document.createElement('div');
        checkTask.classList.add('check-task');
        leftSide.appendChild(checkTask);


        taskList.appendChild(taskElement);

    })

})