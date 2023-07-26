const form = document.getElementById('portfolio-form');
const emailInput = document.getElementById('email-input');
const errorMsg = document.getElementById('error-text');
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email-input');
const textarea = document.getElementById('textArea');

form.addEventListener('submit', (event) => {
  if (emailInput.value === emailInput.value.toLowerCase()) {
    return true;
  }
  errorMsg.style.display = 'block';
  event.preventDefault();
  return false;
});

document.getElementById('error-text').style.color = 'Red';
document.getElementById('error-text').style.fontSize = '120%';
