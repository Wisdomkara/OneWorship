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
