// validationScript.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const inputField = document.getElementById('inputField');

  form.addEventListener('submit', function(event) {
      // Prevent form from submitting
      event.preventDefault();

      // Retrieve the input field value
      const inputValue = inputField.value;

      // Regular expression pattern for alphanumeric input
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (alphanumericRegex.test(inputValue)) {
          // Valid input: display confirmation and 'submit' the form (alert for now)
          alert('Success: Form submitted with valid input.');
          // form.submit(); //would be used to submit the form if the server was configured.
      } else {
          // Invalid input: display error message
          alert('Error: Input must be alphanumeric.');
      }
  });
});