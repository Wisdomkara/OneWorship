const display = document.getElementById('form');

display.addEventListener('submit', function (e) {
  e.preventDefault();
  e.stopPropagation();
  const pop = document.createElement('h1');
  pop.textContent = 'thanks!!! you will receive a newsletter soon';
  display.appendChild(pop);
  pop.classList.add('formstyle');
});

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


 const navLinks = document.querySelectorAll('.navlist a, .dropdown_menu a');

 // Loop through the links to find the one that matches the current URL
 navLinks.forEach((link) => {
   if (link.href === window.location.href) {
     link.classList.add('active');
   }
 });