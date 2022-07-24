const passwordInput = document.getElementById('password');
const rePasswordInput = document.getElementById('re-password');
const validPassword = document.querySelector('.validate__password');
const formBtn = document.querySelector('.form-btn');
const eMailInput = document.getElementById('email');
const passwords = [];

//let userPassword = passwordInput.value;
//let userRePassword = rePasswordInput.value;


console.log(eMailInput.value);
//passwords.push(userPassword);
//passwords.unshift(userRePassword);

console.log(passwords)



//when user starts to type something inside password field
passwordInput.onkeyup = function() {
    //validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;

if(passwordInput.value.match(lowerCaseLetters)) 
{
    letter.classList.remove("invalid");
    letter.classList.add("valid");
} else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

//validate capital letters
const upperCaseLetters = /[A-Z]/g;

if(passwordInput.value.match(upperCaseLetters)) 
{
    capital.classList.remove("invalid");
    capital.classList.add("valid");
} else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
}

//validate numbers
const numbers = /[0-9]/g;

if(passwordInput.value.match(numbers)) 
{
    number.classList.remove("invalid");
    number.classList.add("valid");
} else {
    number.classList.remove("valid");
    number.classList.add("invalid");
}

//validate length

if(passwordInput.value.length >= 12)
{
    length.classList.remove("invalid");
    length.classList.add("valid");
} else {
    length.classList.remove("valid");
    length.classList.add("invalid");
}

}



//to toggle password visibility
function passwordvisibility() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }  else {
        passwordInput.type = "password";
    }
}

//to confirm password
function confirmPassword() {
    if(passwordInput.value != rePasswordInput.value)
    {
        alert("Passwords do not match");
        return false;
    }  else {
        alert("Password correct");
        return true;
    }
}




formBtn.addEventListener("click", function() {
if (userPassword === userRePassword) {
    validPassword.textContent = "";
    passwords.push(userPassword);
passwords.unshift(userRePassword);

console.log(passwords)
    
   
    
}   else {
    validPassword.textContent = "Password does not match";
    validPassword.style = color = "red";
    passwords.push(eMailInput.value)
};

});
