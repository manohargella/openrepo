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
