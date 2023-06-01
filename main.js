// Get the contact form element
const contactForm = document.getElementById('contact-form');

// Add a submit event listener to the form
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user input values
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  // Get the values entered by the user
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Do something with the form data (you can replace this with your own logic)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Reset the form after submission
  contactForm.reset();
});
