toggleBtn = document.querySelector(".toggle_btn");
dropdown = document.querySelector(".dropdown_menu ");
const breakpoint = 768;

toggleBtn.addEventListener("click", function () {
  dropdown.classList.toggle("active");
});
// toggleBtn.addEventListener('click',function () {
//   if (dropdown.classList.contains('active')) {
//     dropdown.classList.remove('active')

//   }else{dropdown.classList.add('active')}
// })
function handleResize() {
  if (window.innerWidth >= breakpoint) {
    dropdown.classList.remove("active");
  }
}
window.addEventListener("resize", handleResize);
window.addEventListener("DOMContentLoaded", handleResize);
