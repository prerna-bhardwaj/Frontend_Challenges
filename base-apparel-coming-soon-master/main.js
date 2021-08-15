const form = document.querySelector('.container form')
const email = document.querySelector('.container form input[type=email]')

form.addEventListener('submit', (e)=>{
    // Prevents the default behavior
    e.preventDefault();
    let emailValue = email.value
    if(validateEmail(emailValue)) {
        console.log("Email is valid")
        form.classList.remove('error')
    }
    else {
        console.log("Email is invalid")
        form.classList.add('error')
    }

})

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}