document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        let firstName = document.getElementById("firstname");
        let lastName = document.getElementById("lastname");
        let email = document.getElementById("email");
        let reasons = document.getElementById("reasons");
        let defaultReason = document.getElementById("default-reason");
        let message = document.getElementById("message");

        firstName.classList.remove("error")
        lastName.classList.remove("error")
        email.classList.remove("error")
        message.classList.remove("error")
        defaultReason.classList.remove("error")

        let isValid = true;

        if (firstName.value.trim() === ""){
            firstName.classList.add("error")
            isValid = false;
        }else {
            firstName.classList.remove("error")
        }
        if (lastName.value.trim() === ""){
            lastName.classList.add("error")
            isValid = false;
        }else {
            lastName.classList.remove("error")
        }
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email.value)) {
            email.classList.add("error")
            isValid = false;
        }else {
            email.classList.remove("error")
        }
        if (message.value.trim() === ""){
            message.classList.add("error")
            isValid = false;
        }else {
            message.classList.remove("error")
        }
        if (reasons.value === "" || reasons.value === "default") {
            defaultReason.classList.add("error")
            isValid = false;
        }else {
            defaultReason.classList.remove("error")
        }
        if (!isValid) {
            e.preventDefault();
        }
    });
});