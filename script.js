console.log("Family Memory Premium Page Loaded");

// Universal function to handle button click
function openNurul(button) {
  button.querySelector("span").innerText = "Loading...";
  button.disabled = true;
  setTimeout(function() {
    window.location.href = "nurul islam.html";
  }, 2000);
}

function openRofikul(button) {
  button.querySelector("span").innerText = "Loading...";
  button.disabled = true;
  setTimeout(function() {
    window.location.href = "rofikul islam.html";
  }, 2000);
}

function openSirajul(button) {
  button.querySelector("span").innerText = "Loading...";
  button.disabled = true;
  setTimeout(function() {
    window.location.href = "sirajul islam.html";
  }, 2000);
}

function openAnikul(button) {
  button.querySelector("span").innerText = "Loading...";
  button.disabled = true;
  setTimeout(function() {
    window.location.href = "anikul islam.html";
  }, 2000);
}

function openMonirul(button) {
  button.querySelector("span").innerText = "Loading...";
  button.disabled = true;
  setTimeout(function() {
    window.location.href = "monirul islam.html";
  }, 2000);
}

function openSomirul(button) {
  button.querySelector("span").innerText = "Loading...";
  button.disabled = true;
  setTimeout(function() {
    window.location.href = "somirul islam.html";
  }, 2000);
}

function openmoments(button) {
  button.querySelector("span").innerText = "Loading...";
  button.disabled = true;
  setTimeout(function() {
    window.location.href = "moments.html";
  }, 2000);
}


// Horizontal slider auto
const track = document.querySelector('.slider-track');

if (track) {
  
  const slides = Array.from(track.children);
  let index = 0;
  
  function slideNext() {
    
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    
  }
  
  // Har 3 second me next slide
  setInterval(slideNext, 3000);
  
}


// gallery Floating Button show/hide
let lastScroll = 0;
let btn = document.getElementById("mmwhatsappBtn");

window.addEventListener("scroll", function() {
  
  if (!btn) return;
  
  let currentScroll = window.pageYOffset;
  
  if (currentScroll < lastScroll) {
    // Scroll UP → Show
    btn.classList.add("show");
  }
  else {
    // Scroll DOWN → Hide
    btn.classList.remove("show");
  }
  
  lastScroll = currentScroll;
  
});


// Automatic Age Calculator

function calculateAge(dobString) {
  
  const parts = dobString.split("/");
  
  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1;
  const year = parseInt(parts[2]);
  
  const dob = new Date(year, month, day);
  const today = new Date();
  
  let age = today.getFullYear() - dob.getFullYear();
  
  const m = today.getMonth() - dob.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  
  return age;
  
}


// Page load hone ke baad age calculate karega
window.addEventListener("DOMContentLoaded", function() {
  
  const dobElements = document.querySelectorAll(".dob");
  const ageElements = document.querySelectorAll(".age");
  
  dobElements.forEach((dobEl, index) => {
    
    const age = calculateAge(dobEl.textContent);
    ageElements[index].textContent = age + " years";
    
  });
  
});
