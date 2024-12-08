function validateSignup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("mail").value;
    const password = document.getElementById("pass").value;
    
    if (!username || !email || !password) {
        alert("Please fill in all the required fields: Username, Email, and Password.");
        return;
    }
    usernameRegex=/^[A-Z][a-z]{3,}$/
    if (!usernameRegex.test(username)) {
        alert("Username must be 3-15 characters long, can only include letters, numbers, and underscores, and must not start or end with an underscore.");
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address ");
        return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isEmailExisting = existingUsers.some((user) => user.email === email);
    if (isEmailExisting) {
        alert("The email address is already registered. Please use a different email.");
        username.value=''
        email.value=''
        password.value=''
        return;
    }
  
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert(
            "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
        );
        return;
    }
   

    const newUser = { username, email, password };
    existingUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Signup successful!");

    console.log("New user registered:", newUser);

    
    window.location.href = "login.html";
}



    // existingUsers.push({ email, username, password });

    // alert("Signup successful!");
    
    // console.log("New user registered:", { username, email, password });
    // console.log("Current users:", existingUsers);

    // window.location.href = "login.html";