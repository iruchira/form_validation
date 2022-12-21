var nameError = document.getElementById('name-error');
var lnameError = document.getElementById('lname-error');
var psw = document.getElementById('psw');
var cpsw = document.getElementById('cpsw');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('fname').value;
    if (name.length == 0) {
        nameError.innerHTML = 'required';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}
function validateLname() {
    var lname = document.getElementById('lname').value;
    if (lname.length == 0) {
        lnameError.innerHTML = 'required';
        return false;
    }
    lnameError.innerHTML = 'valid';
    return true;
}
function validatePassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('Cpassword').value;
    if (password.length < 10) {
        psw.innerHTML = 'password should be 10 characters long';
        return false;
    }
    if (!password.match(/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)) {
        psw.innerHTML = 'use 10 character password which has atleast 1 ch, 1 Uppercase, 1 lowercase, 1 special character and 1 number';
        return false;
    }
    if (!password == confirmPassword) {
        cpsw.innerHTML = 'Passwords do not match';
        return false;
    }
    cpsw.innerHTML = 'matched';
    return true;
}
function submitButton() {
    if (!validateName() || !validateLname() || !validatePassword()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fill out all fields';
        setTimeout(function () { submitError.style.display = 'none' }, 3000);
        return false;
    }
    location.reload();  
    return true;
}
