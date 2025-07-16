// 🔁 Mobile Nav Toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// 🗂️ Tab Switching for Portfolio
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(tab => tab.classList.remove("active"));

      // Add active to clicked
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

// ✨ Scroll Reveal Animation
function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
