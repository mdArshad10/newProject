const form = document.querySelector('form');

console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form[0].value;
    const email = form[1].value;
    const phoneNumber = form[2].value;
    const message = form[3].value;
    console.log({ name, email, phoneNumber, message });
});