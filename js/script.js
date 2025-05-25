function validarEmail() {
    let emailInput = document.getElementById("email");
    let email = document.getElementById("email").value;
    let erro = document.getElementById("erro");
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // expressão regular para validar o formato básico de um email (sem espaços, com um @ e um ponto)

    if (!regexEmail.test(email)) { // verifica se o e-mail nao corresponde ao padrão da regex (ou seja, se é inválido)
        erro.style.visibility = "visible";
        emailInput.classList.add("erro");

    } else {
        erro.style.visibility = "hidden";
        emailInput.classList.remove("erro");
        alert("Email válido! Você será notificado.");  // aqui vai aparecer se  e-mail válido
    }
}