
var loginError = document.getElementById("loginError");
console.log("login button");
function confirmLogin() {

    const loginDetails = {
         emailId : document.getElementById("email_id").value,
         password : document.getElementById("password").value
    };
    console.log(loginDetails);
    if (loginDetails.emailId === "" || loginDetails.password === "") {
        loginError.innerHTML = "Please fill the details."
    }
    else{
        console.log("login button clicked");

        const xhr = new XMLHttpRequest();

        const url = "http://localhost:3000/login";
        xhr.responseType = "json";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json;Charset=UTF-8");
        xhr.send(JSON.stringify(loginDetails));
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.response.msg)
                toast();
            }
            else {
                console.log("error saving file");
            }
        }
        setTimeout(function () { location.assign("./welcome.html")});
    }   
    }
    document.getElementById("button").addEventListener("onclick", confirmLogin);

function toast() {
    var toastMassage = document.getElementById('snackbar');
    toastMassage.className = "show";
    setTimeout(function () { toastMassage.className = toastMassage.className.replace("show", ""); }, 5000);
}
