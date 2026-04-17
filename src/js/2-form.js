const savedFormData = localStorage.getItem('feedback-form-state') ?? '';
const formData = savedFormData
  ? JSON.parse(savedFormData)
  : {
      email: '',
      message: '',
    };
const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const input = form.elements.email;
textarea.value = formData.message;
input.value = formData.email;
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.message || !formData.email) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
  }
});
