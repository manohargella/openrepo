document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // Check if user has dark mode preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Toggle dark mode based on user preference
    if (prefersDarkScheme) {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    document.getElementById('toggle-dark-mode').addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
