var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var psw = document.getElementById('psw');
var cpsw = document.getElementById('cpsw');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('fname').value;
    if (name.length == 0 || name.trim() === "") {
        nameError.innerHTML = '';
        return false;
    }
    //regex for allowing letters and spaces//
    if (!name.match(/^[A-Za-z\s]*$/)) {
        nameError.innerHTML = 'alphabets only';
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    return true;
}
function validateEmailid() {
    var emailId = document.getElementById('email_id').value;
    if (emailId.length == 0 || emailId.trim() === "") {
        emailError.innerHTML = '';
        return false;
    }
    if (!emailId.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
        emailError.innerHTML = 'invalid email';
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    return true;
}
function validatePassword() {
    var password = document.getElementById('password').value;
    var passwordStr = password.match(/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/);
    var confirmPassword = document.getElementById('Cpassword').value;

    if (password.length !== 10 && !passwordStr) {
        psw.style.display = 'block';
        setTimeout(function () { psw.style.display = 'none' }, 2000);
        psw.innerHTML = '* Password should contain 1 character, 1 Uppercase, 1 lowercase, 1 special character and 1 number';
        return false;
    }
    if (confirmPassword !== password) {
        cpsw.innerHTML = 'Passwords do not match';
        return false;
    }
    cpsw.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    return true;
}
function submitButton() {
    if (!validateName() || !validateEmailid() || !validatePassword()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill out *required fields !!';
        setTimeout(function () { submitError.style.display = 'none' }, 3000);
        return false;
    }
    setTimeout(function(){location.reload()},500);
    toast();
    return true;
}
function toast(){
    var toastMassage= document.getElementById('snackbar');
    toastMassage.className ="show";
    setTimeout(function(){ toastMassage.className = toastMassage.className.replace("show", ""); }, 5000);
}

