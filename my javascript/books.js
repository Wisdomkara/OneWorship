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

// Call the handleResize function on window resize and load
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);

const mode = document.querySelector('.switch');
let bodyElement = document.body;
function night() {
  if(bodyElement.style.background=='white'){
  bodyElement.style.background = 'linear-gradient( to bottom, black, #0A1F44)';
  bodyElement.style.color = 'white';
  }
  else{
    bodyElement.style.background='white'
    bodyElement.style.color='white'
  }
}
mode.addEventListener('click', night );

// const night_mode=document.querySelector('.switch')
//  function night(){
//   document.body.style.background='linear-gradient(to bottom,black, #0A1F44)'
//   document.body.style.color='white'
//  }

// night_mode.addEventListener('click',night)
