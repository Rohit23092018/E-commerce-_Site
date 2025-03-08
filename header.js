// Function to load the header dynamically
function loadHeader() {
    fetch("header.html") // Ensure the file path is correct
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            attachEventListeners(); // Attach event listeners after loading header
        })
        .catch(error => console.error("Error loading header:", error));
}

// Function to toggle the menu
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    if (navMenu) {
        navMenu.classList.toggle("show");
    }
}

// Function to attach event listeners after loading the header
function attachEventListeners() {
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }
}

// Load the header when the page loads
document.addEventListener("DOMContentLoaded", loadHeader);
