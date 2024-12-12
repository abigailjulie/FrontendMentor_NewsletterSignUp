const form = document.querySelector("form"); 
const signUpForm = document.getElementById("signUpForm"); 
const signUpClear = document.getElementById("signUpClear");  
const emailInput = document.getElementById("exampleInputEmail1");
const abstractImgMobile = document.getElementById("abstractImgMobile");
const main = document.getElementById("main");
const dismissBtn = document.getElementById("dismissBtn");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email && emailRegex.test(email)) {
        signUpForm.style.display = "none";
        signUpClear.style.display = "block";
        abstractImgMobile.style.display = "none";

        // main.style.backgroundColor = "var(--White)";
    } else {
        alert("Please enter a valid email address.");
    }
});

dismissBtn.addEventListener("click", function(e) {
    e.preventDefault();
    signUpForm.style.display = "flex";
    signUpClear.style.display = "none";

    main.style.backgroundColor = "var(--Charcoal-Grey)";
    // main.style.backgroundColor = "var(--White)";
    emailInput.value = "Subscribed!";
});