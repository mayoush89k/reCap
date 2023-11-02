// 1. Access the Form: Get a reference to the form element.
const form = document.querySelector('form')

// 2. Add Event Listener: Attach a  submit  event listener to the form and pass it the eventobject as  e .
form.addEventListener('submit' , submitFunction)

// 4. Retrieve Input Values: Access the values of the username, email, password and the confirm password input fields using  getElementById  or  querySelector  and the  value
// property.
const username = document.getElementsByName('username')[0]
const password = document.getElementsByName('password')[0]
const confirmedPassword = document.getElementsByName('confirm-password')[0]
const email = document.getElementsByName('email')[0]

// 5. Display Alert: Concatenate the retrieved values and display them using an  alert()
// function:
// alert("Username: " + username + "\nEmail: " + email + "\nPassword: " +password);
function submitFunction(e){
    // 3. Prevent Default Behavior: Inside the event handler, use  e.preventDefault()  to preventthe form from submitting apon clicking the submit button, in the default manner.
    e.preventDefault()
    alert(`Username: ${username.value} \nEmail: ${email.value} \nPassword: ${password.value}`)
}
