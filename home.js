document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.9; // Adjust trigger point

        gridItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load in case items are already in view
});

//Buttons animation code
document.addEventListener("DOMContentLoaded", () => {
    // Add the "animate" class after a short delay
    setTimeout(() => {
        document.querySelector(".hero-content").classList.add("animate");
        document.querySelector(".hero-buttons").classList.add("animate");
    }, 500); // Adjust delay as needed (in milliseconds)
});

let slideIndex = 0;

// Function for slideshow
function showSlides() {
    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Function for manual navigation
function changeSlide(n) {
    let slides = document.querySelectorAll(".slide");

    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

// Start slideshow when page loads
document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});

//feedback
document.addEventListener("DOMContentLoaded", () => {
    const feedbacks = [
        {
            text: `"Excellent solar panel installation services. Highly recommend!"`,
            name: "Sarah Johnson",
            role: "Homeowner",
            img: "sarah.jpg"
        },
        {
            text: `"Efficient and affordable solar energy solutions!"`,
            name: "Michael Lee",
            role: "Business Owner",
            img: "michael.jpg"
        },
        {
            text: `"Great customer support and installation process."`,
            name: "Emily Brown",
            role: "Engineer",
            img: "emily.jpg"
        }
    ];

    let index = 0;
    const feedbackText = document.querySelector(".feedback-text");
    const userName = document.querySelector(".user-info h4");
    const userRole = document.querySelector(".user-info p");
    const userImage = document.querySelector(".user-info img");

    function changeFeedback() {
        feedbackText.textContent = feedbacks[index].text;
        userName.textContent = feedbacks[index].name;
        userRole.textContent = feedbacks[index].role;
        userImage.src = feedbacks[index].img;

        index = (index + 1) % feedbacks.length;
    }

    setInterval(changeFeedback, 4000);
});

//About Section
document.addEventListener("DOMContentLoaded", function () {
    const aboutBox = document.querySelector(".about-box");

    // Reveal animation when scrolling
    window.addEventListener("scroll", function () {
        let aboutPosition = aboutBox.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (aboutPosition < screenPosition) {
            aboutBox.style.opacity = "1";
            aboutBox.style.transform = "translateY(0)";
        }
    });
});

//service provided section
document.addEventListener("DOMContentLoaded", () => {
    console.log("Services section loaded successfully.");
});

//feedback form
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("QSnsN8rvi8NmAf3Lc"); // Replace with your actual EmailJS Public Key

    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send email using EmailJS
        emailjs.send("service_ggi2bxk", "template_hmbn5wg", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            alert("Feedback Sent Successfully!");
            document.getElementById("feedbackForm").reset();
        }, function(error) {
            alert("Error: Could not send feedback. Please try again later.");
        });
    });
});

//for mobile view
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});


