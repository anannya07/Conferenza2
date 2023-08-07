const loginToggle = document.getElementById('login-toggle');
const signupToggle = document.getElementById('signup-toggle');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginToggle.addEventListener('click', function() {
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

signupToggle.addEventListener('click', function() {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  
  console.log('Login:', username, password);
});

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  console.log('Sign Up:', username, password);
});

