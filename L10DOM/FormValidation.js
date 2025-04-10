const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = name.value;
    console.log(nameValue);
    if (name.value.trim() === '') {
        alert('Please enter your name');
    } else if (email.value.trim() === '') {
        alert('Please enter your email');
    }
    console.log("Data Submitted")
})
