// const form = document.querySelector('#form');
// const name = document.querySelector('#name');
// const email = document.querySelector('#email');
// const phone = document.querySelector('#phone');
// const password = document.querySelector('#password');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const nameValue = name.value.trim();
//     const emailValue = name.value.trim();
//     const phoneValue = name.value.trim();
//     const passwordValue = name.value.trim();
//     if (nameValue == "") {
//         e.preventDefault();
//         alert("Please enter your name");
//         name.focus();
//         return false;
//     }
//     console.log(nameValue);
    
// })
























const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    // Name validation
    if (nameValue === "") {
        alert("Please provide your name");
        nameInput.focus();
        return false;
    }
    
    if (!/^[a-zA-Z ]+$/.test(nameValue)) {
        alert("Please provide a valid name (letters only)");
        nameInput.focus();
        return false;
    }
    
    // Email validation
    if (emailValue === "") {
        alert("Please provide your email");
        emailInput.focus();
        return false;
    }
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        alert("Please provide a valid email address");
        emailInput.focus();
        return false;
    }
    
    // Phone validation
    if (phoneValue === "") {
        alert("Please provide your phone number");
        phoneInput.focus();
        return false;
    }
    
    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneValue)) {
        alert("Please provide a valid phone number");
        phoneInput.focus();
        return false;
    }
    
    // Password validation
    if (passwordValue === "") {
        alert("Please provide a password");
        passwordInput.focus();
        return false;
    }
    
    if (passwordValue.length < 8) {
        alert("Password must be at least 8 characters long");
        passwordInput.focus();
        return false;
    }
    
    // If all validations pass
    alert("Form submitted successfully!");
    form.submit();
});
