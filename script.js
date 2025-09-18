// Dark/Light Mode
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Counter Game
let counter = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increase").onclick = () => counterDisplay.textContent = ++counter;
document.getElementById("decrease").onclick = () => counterDisplay.textContent = --counter;
document.getElementById("reset").onclick = () => counterDisplay.textContent = counter = 0;

// FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".faq-answer");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Dynamic Welcome
const welcome = document.getElementById("welcome-message");
const hour = new Date().getHours();
if (hour < 12) welcome.textContent = "🌞 Good Morning! Welcome to Kayoni Graphics";
else if (hour < 18) welcome.textContent = "☀️ Good Afternoon! Welcome to Kayoni Graphics";
else welcome.textContent = "🌙 Good Evening! Welcome to Kayoni Graphics";

// Gallery Navigation
const gallery = document.querySelectorAll(".gallery img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let current = 0;

function showImage(index) {
  gallery[current].style.display = "none";
  current = (index + gallery.length) % gallery.length;
  gallery[current].style.display = "block";
}
gallery.forEach(img => img.style.display = "none");
gallery[current].style.display = "block";
prevBtn.addEventListener("click", () => showImage(current - 1));
nextBtn.addEventListener("click", () => showImage(current + 1));

// Contact Form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  alert(`✅ Thank you, ${name}! Your message has been sent.`);
  e.target.reset();
});
