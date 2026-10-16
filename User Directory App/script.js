const userList = document.getElementById("user-list");
const searchInput = document.getElementById("search");
const statusText = document.getElementById("status");

let users = [];

async function fetchUsers() {
  statusText.textContent = "Loading users...";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    users = await response.json();

    statusText.textContent = "";
    displayUsers(users);
  } catch (error) {
    statusText.textContent =
      "Unable to load users. Please try again.";
    console.error(error);
  }
}

function displayUsers(userData) {
  userList.replaceChildren();

  if (userData.length === 0) {
    statusText.textContent = "No users found.";
    return;
  }

  statusText.textContent = "";

  userData.forEach((user) => {
    const card = document.createElement("article");
    card.className = "user-card";

    const name = document.createElement("h2");
    name.textContent = user.name;

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    const city = document.createElement("p");
    city.textContent = `City: ${user.address.city}`;

    card.append(name, email, city);
    userList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText)
  );

  displayUsers(filteredUsers);
});

fetchUsers();