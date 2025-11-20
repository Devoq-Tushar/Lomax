// email.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#sign-up-form");
    const emailInput = document.querySelector("#emailInput");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (email !== "") {
            console.log("submit ok")
            window.location.href = "../otp/otp.html";
        }
    });
});
