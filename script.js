
// Wait until the complete webpage is loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("My JavaScript file is connected!");

    // Display current year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Welcome animation
    const welcome = document.getElementById("welcome-message");

    if (welcome) {
        welcome.classList.add("welcome-animation");
    }

    // Dark mode
    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {
        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeButton.textContent = "☀️";
            } else {
                themeButton.textContent = "🌙";
            }

        });
    }

    // jQuery check
    if (typeof jQuery !== "undefined") {
        console.log("jQuery is working!");
    } else {
        console.log("jQuery is not loaded!");
    }

});
