// toggle menu & icon animation
var navicon = document.getElementById('navicon');
var mainnav = document.querySelector('.mainnav');
// On click
navicon.addEventListener("click", function () {
  // Toggle class "is-active"
  navicon.classList.toggle("is-active");
  mainnav.classList.toggle('mainnav--closed');
});