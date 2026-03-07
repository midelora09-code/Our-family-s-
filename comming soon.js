// Check if launch date already saved
let launchDate = localStorage.getItem("launchDate");

if (!launchDate) {
  
  let now = new Date();
  
  // 30 days add
  now.setDate(now.getDate() + 30);
  
  launchDate = now.getTime();
  
  // save in browser
  localStorage.setItem("launchDate", launchDate);
  
} else {
  
  launchDate = parseInt(launchDate);
  
}

const timer = setInterval(function() {
  
  const now = new Date().getTime();
  
  const distance = launchDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "🎉 Website is Live!";
  }
  
}, 1000);