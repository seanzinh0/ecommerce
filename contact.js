//contact form element
const contactForm = document.querySelector('.contact-form');
//add on submit event listener to contact form
contactForm.addEventListener('submit', (e) => {
    //input elements
    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById("lastname");
    let email = document.getElementById("email");
    let reasons = document.getElementById("reasons");
    let defaultReason = document.getElementById("default-reason");
    let message = document.getElementById("message");

    //remove error class to clear style when new form is open
    firstName.classList.remove("error")
    lastName.classList.remove("error")
    email.classList.remove("error")
    message.classList.remove("error")
    defaultReason.classList.remove("error")

    //tracks if form is valid
    let isValid = true;

    //if firstname is empty isValid is false and adds error style
    if (firstName.value.trim() === ""){
        firstName.classList.add("error")
        isValid = false;
    }else {
        //remove error style if isValid is true
        firstName.classList.remove("error")
    }
    //if lastname is empty isValid is false and adds error style
    if (lastName.value.trim() === ""){
        lastName.classList.add("error")
        isValid = false;
    }else {
        lastName.classList.remove("error")
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //test email against the regex
    if (!emailRegex.test(email.value)) {
        email.classList.add("error")
        isValid = false;
    }else {
        email.classList.remove("error")
    }
    //if message is empty isValid is false and adds error style
    if (message.value.trim() === ""){
        message.classList.add("error")
        isValid = false;
    }else {
        message.classList.remove("error")
    }
    //checks to see if reasons is on default and adds error style and add isValid to false
    if (reasons.value === "" || reasons.value === "default") {
        defaultReason.classList.add("error")
        isValid = false;
    }else {
        defaultReason.classList.remove("error")
    }
    //if isValid is false prevent default
    if (!isValid) {
        e.preventDefault();
    }
});