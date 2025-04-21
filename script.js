document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const messageBox = document.getElementById('form-message');
  messageBox.innerHTML = "Thank you! Your message has been sent.";
  this.reset();
});