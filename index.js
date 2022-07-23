const submitBtn = document.getElementById("submit");
const inputEmail = document.getElementById("email");
const error = document.getElementById("error");
document.forms[0].noValidate = true;

if (submitBtn.addEventListener) {
    submitBtn.addEventListener("click", function(e){
        validateEmail(e)
    });
} else {
    submitBtn.attachEvent("onclick", function(e){
        validateEmail(e)
    });
}

inputEmail.onfocus = () => {
    if (inputEmail.classList.contains("invalid")){
        // remove the "error" indication, because the user wants to re-enter something
        inputEmail.classList.remove('invalid');
        error.innerText = "";
    }
}

function validateEmail(e) {
    var valid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!inputEmail.value.match(valid)) {   // not email
        e.preventDefault(); 
        inputEmail.classList.add('invalid');
        error.innerText = "Please provide a valid email";
    }
}

