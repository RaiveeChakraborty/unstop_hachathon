function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Basic validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in both fields.";
        errorMessage.classList.remove("hidden");
    } else {
        // Replace this with real authentication logic
        if (username === "user" && password === "password") {
            alert("Login successful!");
            errorMessage.classList.add("hidden");
            // Redirect to another page or perform additional actions here
        } else {
            errorMessage.textContent = "Invalid username or password.";
            errorMessage.classList.remove("hidden");
        }
    }
}

function socialLogin(provider) {
    alert(`Redirecting to ${provider} login...`);
    // Redirect to actual social login page here
    // Example:
    // window.location.href = `/auth/${provider.toLowerCase()}`;
}


function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("hidden");
}

// Close the dropdown if clicked outside
window.addEventListener("click", function(e) {
    const button = document.querySelector("button[onclick='toggleDropdown()']");
    const dropdownMenu = document.getElementById("dropdownMenu");
    if (!button.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add("hidden");
    }
});