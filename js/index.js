const userList = document.getElementById('user-List');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>name:${user.name}</strong><br> city:${user.address.city},street:${user.address.street},suite:${user.address.suite},zipcode:${user.address.zipcode}, geo: lat ${user.address.geo.lat}`;
            userList.appendChild(li)


        });
    })


const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Ошибка HTTP:${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

    })
    .catch(eror => {
        console.error("Ошибка при получении данных", error);
    })