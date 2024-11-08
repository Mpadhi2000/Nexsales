## Form Validation with XHR

In this project, we have implemented a form validation using JavaScript and XHR (XMLHttpRequest). The form collects user information such as full name, phone number, email, and password. Here's a brief explanation of how the validation and data submission work:

1. **Form Validation**:
   - The `validation` function is triggered when the form is submitted.
   - It prevents the default form submission using `event.preventDefault()`.
   - It retrieves the values entered by the user in the form fields.
   - It performs various checks to ensure the data is valid:
     - Full name must be at least 3 characters long.
     - Phone number must be exactly 10 digits.
     - Email must match a specific pattern.
     - Password must contain at least 1 special character, 1 number, and 1 letter.
     - Password and confirm password must match.
   - If any of the checks fail, an error message is displayed next to the corresponding field.
   - If all checks pass, the `dataSendtoApi` function is called to send the data to the server.

2. **Data Submission with XHR**:
   - The `dataSendtoApi` function creates an XHR object to send the data to a server.
   - It opens a POST request to the specified URL.
   - It sets the request header to indicate that the data being sent is in JSON format.
   - It defines a response handler to log the server's response if the request is successful.
   - It defines an error handler to log an error message if the request fails.
   - It sends the data to the server in JSON format.

This approach ensures that the user inputs are validated before being sent to the server, providing a better user experience and reducing the chances of invalid data being submitted.

[Link to see my work](https://nexsales-xhr.vercel.app/)