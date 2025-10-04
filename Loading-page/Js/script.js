document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const hambtn = document.getElementById('hambtn');
const mobileMenu = document.getElementById('mobileMenu');
hambtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Toast message
const toast = document.getElementById('toast');
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// Form submit
const form = document.getElementById('bookingForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast("Thank you! Your booking was submitted.");
  form.reset();
});

// Reset button clears message too
document.getElementById('resetBtn').addEventListener('click', () => {
  showToast("Form reset.");
});
