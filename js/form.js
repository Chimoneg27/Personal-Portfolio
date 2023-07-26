const form = document.getElementById('portfolio-form');
const emailInput = document.getElementById('email-input');
const errorMsg = document.getElementById('error-text');
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email-input');
const textarea = document.getElementById('textArea');
const data = textarea.value;

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

const savedInfo = JSON.parse(localStorage.getItem('myFormInfo'));
if (savedInfo && localStorage.getItem('textareaData')) {
  fullName.value = savedInfo.name;
  email.value = savedInfo.email;
  textarea.value = localStorage.getItem('textareaData');
}

function saveFormInfo() {
  const myFormInfo = {
    name: fullName.value,
    email: email.value,
    textarea: data,
  };
  localStorage.setItem('myFormInfo', JSON.stringify(myFormInfo));
}

textarea.addEventListener('input', () => {
  const data = textarea.value;
  localStorage.setItem('textareaData', data);
});
fullName.addEventListener('input', saveFormInfo);
email.addEventListener('input', saveFormInfo);