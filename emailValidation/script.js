const userForm = document.getElementById('userForm')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')


function showError(input , message){
    const errorDiv = document.getElementById(input.id+'Error')
    errorDiv.textContent = message
    input.classList.add('error')
}

userForm.addEventListener('submit' , (e) => {
    e.preventDefault()
    let isValid = true

    if(username.value.length < 3){
        showError(username , `${username.value} must be at least 3 characters`)
        isValid = false
    }
    
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegEx.test(email.value)){
        showError(email , 'Please enter a valid email')
        isValid = false
    }
    
    const passwordRegex =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(!passwordRegex.test(password.value)){
        showError(password , 'Password must be at least 8 characters long, containinglowercase, uppercase letters, numbers, and a specialcharacter.')
        isValid = false
    }
    
    if(password.value != confirmPassword.value){
        showError(confirmPassword , "Passwords Don't match")
        isValid = false
    }
    if(isValid){
        alert('User Form Submitted Successfully')
    }

})

[username , email , password , confirmPassword].forEach(input => {
    input.addEventListener('input' , () => {
        input.classList.remove(input.id+"Error")
        document.getElementById(input.id+"Error").textContent = ""
    })
})
