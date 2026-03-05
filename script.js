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
const slides = Array.from(track.children);
let index = 0;

function slideNext() {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Har 3 second me next slide
setInterval(slideNext, 3000);

