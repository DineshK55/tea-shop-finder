/* Mobile menu toggle */
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}


// ===== Navbar scroll effect ===== 
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");

  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

// Redirect user to search page with query
function quickSearch(text) {
  window.location.href =
    "search.html?q=" + encodeURIComponent(text);
}


