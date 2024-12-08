const loggedInUser = JSON.parse(localStorage.getItem("users"));
console.log(loggedInUser);

if (loggedInUser && loggedInUser[0].username) {
    document.getElementById("welcomeMessage").innerHTML = `Welcome  ${loggedInUser[0].username}`;
} 
function logOut(){
    window.location.href = "login.html";
}