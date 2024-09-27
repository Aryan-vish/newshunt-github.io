document.addEventListener("DOMContentLoaded", function () {
    const newsCards = document.querySelectorAll('.news-card');
    const modal = document.getElementById('article-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close');

    const clockElement = document.getElementById('clock');

    // Dummy news content
    const newsContent = {
        card1: {
            title: "Tech Innovations in 2040",
            content: "In 2040, the tech world is driven by AI-powered systems that are revolutionizing industries...",
            img: "news1.jpg"
        },
        card2: {
            title: "World Politics in the Future",
            content: "Political landscapes are shifting as technology merges with global governance, creating...",
            img: "news2.jpg"
        },
        card3: {
            title: "Futuristic Cities Built on Mars",
            content: "Explore the development of self-sustaining Martian colonies, equipped with the latest advancements...",
            img: "news3.jpg"
        }
    };

    // Open Modal with News Details
    function openModal(cardId) {
        const news = newsContent[cardId];
        modalTitle.textContent = news.title;
        modalContent.textContent = news.content;
        modalImg.src = news.img;
        modal.style.display = 'flex';
    }

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none
// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Fetch default news on page load
fetchNews();