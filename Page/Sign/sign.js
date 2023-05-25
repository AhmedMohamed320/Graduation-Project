const btnSignWithPassword=document.getElementById("signWithPassword");
const labelPassword = document.getElementById("password-label");
const inputPassword = document.getElementById("password");

btnSignWithPassword.addEventListener("click",(e)=>{
    e.preventDefault();
    labelPassword.classList.toggle("active");
    inputPassword.classList.toggle("active");
})