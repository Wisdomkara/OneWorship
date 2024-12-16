// for handling the toggle button

const toggleBtn = document.querySelector('.toggle_btn');
const dropdown = document.querySelector('.dropdown_menu');
const breakpoint = 768;

// Add click event listener to the toggle button
toggleBtn.addEventListener('click', function () {
  dropdown.classList.toggle('active'); // Toggle the 'active' class on the dropdown
});

// Handle screen resizing
function handleResize() {
  if (window.innerWidth >= breakpoint) {
    dropdown.classList.remove('active');
  }
}
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);

// script.js

// Function to handle scroll event
const animatedElements = document.querySelectorAll('.animated');

function checkVisibility() {
    const windowHeight = window.innerHeight;
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        // Check if the element is in the viewport
        if (elementTop < windowHeight - 100) { // Trigger when it's about 100px from the bottom of the viewport
            element.classList.add('visible');
        }
    });
}

// Add event listener for scroll and load
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility); // Check visibility on page load

