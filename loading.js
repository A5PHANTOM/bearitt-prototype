// Show loading screen for 3 seconds
setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none"; // Hide loading screen
    document.getElementById("content-area").classList.remove("hidden"); // Show content area
}, 3000); // 3000 milliseconds = 3 seconds
