
const mechanicsBtn = document.getElementById("mechanics-btn");
const mechanicsBox = document.getElementById("mechanics-box");

mechanicsBtn.addEventListener("click", function (e) {
e.preventDefault();

if (mechanicsBox.style.display === "none") {
    mechanicsBox.style.display = "block";
    mechanicsBox.innerHTML = `
    <p>🎮 <strong>Game Mechanics</strong></p>
    <p> Nine numbered circles (1-9) will be displayed in a random order for a short time before disappearing.
        The player must recall their position and click the circle ls in the correct numerical sequence.
        Points are on accuracy. </p>`;
} else {
    mechanicsBox.style.display = "none";
}
});

const lastUser = localStorage.getItem("lastUser");
if (lastUser) {
    alert(`Welcome back, ${lastUser}!`);
}


const userBtn = document.getElementById("enter-user-btn");
const userForm = document.getElementById("user-form");
const usernameInput = document.getElementById("username");

userBtn.addEventListener("click", function (e) {
    e.preventDefault();
    userForm.style.display = "block";
    usernameInput.reset();
});

userForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    if (!username) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.includes(username)) {
     alert(`Welcome back, ${username}!`)
    } 
    else {
        users.push(username);
        localStorage.setItem("users", JSON.stringify(users));
        alert(`Welcome, ${username}!`);
    }

    localStorage.setItem("lastUser", username);
    userForm.reset();
    userForm.style.display = "none";
});
