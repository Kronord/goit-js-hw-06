const submitInp = document.querySelector(".login-form");

const handleSubmit = event => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    } else {
        const fieldValues = {
            email: email.value,
            password: password.value,
        };
        console.log(fieldValues);
        event.currentTarget.reset();
        return;
     }
};

submitInp.addEventListener("submit", handleSubmit);


