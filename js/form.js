const form = document.getElementById('portfolio-form');
const emailInput = document.getElementById('email-input');
const errorMsg = document.getElementById('error-text');

form.addEventListener('submit', (event) => {
    if (emailInput.value === emailInput.value.toLowerCase()) {
      return true;
    }
    errorMsg.style.display = 'block';
    event.preventDefault();
    return false;
  });