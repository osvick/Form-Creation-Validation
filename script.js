document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get and trim user inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation tracking
        let isvalid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isvalid = false;
            messages.push("username must be at least 3 characters long.");
        }

        // Email validation
        if (password.length < 8) {
            isvalid = false;
            messages.push("password must be at least 8 characters long.")
        }

        // Show feedback
        feedbackDiv.style.display = "block";
        if (isvalid) {
            feedbackDiv.textcontent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; 
            form.reset(); //Optional: Clear the form
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
