document.addEventListener("DOMContentLoaded", function () {
    const otpInput = document.getElementById("otpInput");

    if (otpInput) {
        otpInput.addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9]/g, "");
        });
    }
});