const darkModeToggle = document.querySelector('.dark-mode-toggle');
const darkModeStyle = document.getElementById('darkModeStyle');
document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.getElementById("sidebar");
    let toggleBtn = document.getElementById("toggle-btn");
    let lastScrollTop = 0;
    let isSidebarOpen = false;

    // Toggle Sidebar
    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        isSidebarOpen = sidebar.classList.contains("open");

        // Ensure toggle button stays visible when sidebar is open
        if (isSidebarOpen) {
            toggleBtn.style.opacity = "1";
            toggleBtn.style.transform = "translateY(0)";
        }
    });

    // Hide Toggle Button on Scroll Down, Show on Scroll Up
    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop && !isSidebarOpen) {
            // Scrolling down - hide the button
            toggleBtn.style.transform = "translateY(-100%)";
            toggleBtn.style.opacity = "0";
            toggleBtn.style.pointerEvents = "none";
        } else {
            // Scrolling up - show the button
            toggleBtn.style.transform = "translateY(0)";
            toggleBtn.style.opacity = "1";
            toggleBtn.style.pointerEvents = "auto";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener("scroll", function() {
    document.querySelector(".back-to-top").style.display = window.scrollY > 300 ? "block" : "none";
});

const thumbnails =
document.querySelectorAll('.thumbnail');
const modal =
document.getElementById('fullscreenModal');
const fullscreenImage =
document.getElementById('fullscreenImage');
const closeModal =
document.getElementById('closeModal');

// Open the modal with the clicked image

thumbnails.forEach(img => {
    img.addEventListener('click', () => {
       fullscreenImage.src = img.src;
       modal.style.display = 'flex'; 
    });
});

// close the modal when clicking the close button

closeModal.addEventListener('click', () => {
modal.style.display = 'none';
});


const themeToggle = document.getElementById('theme-toggle');

// Set initial theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}
// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeStyle.removeAttribute('disabled');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeStyle.setAttribute('disabled', 'true');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeStyle.removeAttribute('disabled');
}
