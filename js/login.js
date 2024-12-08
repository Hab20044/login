
// function validateLogin() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const validUsers = [];

    
//     const isValidUser = validUsers.some(
//         (user) => user.email === email && user.password === password
//     );

//     if (isValidUser) { 
//         alert("Login successful!");
//         window.location.href = "home.html"; 
//     } else {
//         alert("Invalid email or password. Please try again.");
//     }
// }
function validateLogin() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("passsword").value;


    if (!email || !password) {
        alert("Please fill in all the required fields: Email and Password.");
        return;
    }

   
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    
    const user = existingUsers.find(
        (user) => user.email === email && user.password === password
    );

    if (!user) {
        alert("Invalid email or password. Please try again.");
        return;
    }

    alert(`Welcome back ${user.username}!`);
    console.log("Logged in user:", user);

    window.location.href = "home.html";
}