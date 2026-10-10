const message = document.querySelector(".loadMessage");
const userCards = document.querySelector(".cards");
const deleteUsersButton = document.querySelector(".deleteUsers");
const getUsersButton = document.querySelector(".getUsers");

let users = [];
const savedUsers = localStorage.getItem("users");

if (savedUsers !== null) {
  users = JSON.parse(savedUsers);
  renderUsers();
  message.textContent = "";
} else {
  getUsers();
}

async function getUsers() {
  message.textContent = 'Данные загружаются...';
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2500);
  });

  try {
    const response = await fetch("users.json");
    if (!response.ok) {
    throw new Error("Ошибка загрузки");
}
    const data = await response.json();

    if (users.length === data.length) {
    message.textContent = 'Все пользователи уже отображаются';
    return;
}
    users = data;
    localStorage.setItem("users", JSON.stringify(users));

    renderUsers();
    message.textContent = "";
  } catch (error) {
    message.textContent = "Ошибка при загрузке данных";
  }
}

function renderUsers() {
  userCards.textContent = "";
  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    const nameElement = document.createElement("p");
    nameElement.textContent = user.name;
    card.append(nameElement);

    const surnameElement = document.createElement("p");
    surnameElement.textContent = user.surname;
    card.append(surnameElement);

    const emailElement = document.createElement("p");
    emailElement.textContent = user.email;
    card.append(emailElement);

    const ageElement = document.createElement("p");
    ageElement.textContent = user.age;
    card.append(ageElement);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Удалить";
    card.append(deleteButton);

    deleteButton.addEventListener('click', () => {
      users = users.filter((item) => {
        return item.id !== user.id;
      });

      localStorage.setItem("users", JSON.stringify(users));
      renderUsers();
    });
    userCards.append(card);
  });
}

deleteUsersButton.addEventListener('click', () => {
  users = [];
  localStorage.setItem('users', JSON.stringify(users));
  renderUsers();
});
  
  getUsersButton.addEventListener('click', () => {
    getUsers();
  });

