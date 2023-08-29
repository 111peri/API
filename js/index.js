// const userList = document.getElementById('user-List');

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         users.forEach(user => {
//             const li = document.createElement('li');
//             li.innerHTML = `<strong>name:${user.name}</strong><br> city:${user.address.city},street:${user.address.street},suite:${user.address.suite},zipcode:${user.address.zipcode}, geo: lat ${user.address.geo.lat}`;
//             userList.appendChild(li)


//         });
//     })





//2

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// func для создания новой задачи и обновления списка задач
function createTask(title) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                userId: 1, // id пользователя 
                title: title,
                completed: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(newTask => {
            const li = document.createElement('li');
            li.textContent = newTask.title;
            taskList.appendChild(li);
        })
        .catch(error => console.error('Ошибка отправки данных:', error));
}

// отправка формы
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const title = titleInput.value.trim();
    if (title !== '') {
        createTask(title);
        titleInput.value = '';
    }
});

// Загрузка списка задач при загрузке страницы
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(tasks => {
        tasks.slice(0, 5).forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            taskList.appendChild(li);
        });
    })
    .catch(error => console.error('Ошибка получения данных:', error));


//     Сделать GET запрос с помощью fetch() по адресу

// https://jsonplaceholder.typicode.com/posts