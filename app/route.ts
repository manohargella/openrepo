// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    var updateButton = document.getElementById('updateButton');
    var contentContainer = document.getElementById('contentContainer');

    // Add click event listener to the button
    updateButton.addEventListener('click', function () {
        // Generate a random number
        var randomNumber = Math.floor(Math.random() * 100);

        // Update the content of the div
        contentContainer.textContent = 'Updated Content: ' + randomNumber;
    });
});
