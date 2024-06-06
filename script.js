document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('hidden');
    });

    document.getElementById('close-mobile-menu').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });

    // Replace icons with Feather Icons
    feather.replace();
});

// JavaScript for pagination
const cardsPerPage = 6; // Adjust this based on the number of cards per page
let currentPage = 1;

const cardContainers = document.querySelectorAll('.card-container > .card');
const totalPages = Math.ceil(cardContainers.length / cardsPerPage);

const firstPageBtn = document.getElementById('firstPageBtn');
const secondPageBtn = document.getElementById('secondPageBtn');
const thirdPageBtn = document.getElementById('thirdPageBtn');
const fourthPageBtn = document.getElementById('fourthPageBtn');

// Function to show cards for the current page
function showPage(pageNumber) {
    const startIndex = (pageNumber - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    cardContainers.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Update active state for page buttons
    firstPageBtn.classList.toggle('bg-blue-500', pageNumber === 1);
    secondPageBtn.classList.toggle('bg-blue-500', pageNumber === 2);
    thirdPageBtn.classList.toggle('bg-blue-500', pageNumber === 3);
    fourthPageBtn.classList.toggle('bg-blue-500', pageNumber === 4);
}

// Show the initial page
showPage(currentPage);

// Event listeners for page buttons
firstPageBtn.addEventListener('click', () => {
    currentPage = 1;
    showPage(currentPage);
});

secondPageBtn.addEventListener('click', () => {
    currentPage = 2;
    showPage(currentPage);
});

thirdPageBtn.addEventListener('click', () => {
    currentPage = 3;
    showPage(currentPage);
});

fourthPageBtn.addEventListener('click', () => {
    currentPage = 4;
    showPage(currentPage);
});
