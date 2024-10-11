// Select the toggle button and dropdown menu
const toggleBtn = document.querySelector('.toggle_btn');
const dropdown = document.querySelector('.dropdown_menu'); // Remove extra space

// Define breakpoint
const breakpoint = 768;

// Toggle dropdown menu visibility on button click
toggleBtn.addEventListener('click', function () {
  if (dropdown.classList.contains('active')) {
    dropdown.classList.remove('active');
  } else {
    dropdown.classList.add('active');
  }
});

// Handle window resize to remove 'active' class when above breakpoint
function handleResize() {
  if (window.innerWidth >= breakpoint) {
    dropdown.classList.remove('active');
  }
}

// Add event listeners for resize and DOMContentLoaded
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);
