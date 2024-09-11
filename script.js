const form = document.querySelector('#form');
const nome = document.querySelector('input#nome');
const cpf = document.querySelector('input#cpf');
const email = document.querySelector('input#email');
const telefone = document.querySelector('input#telefone');
const senha = document.querySelector('input#senha');
const confirm = document.querySelector('input#confirm');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  if (nome.value === "") {
    alert("Por favor, preencha seu nome.");
    return; 
  }

  if (cpf.value === "") {
    alert("Por favor, preencha seu CPF.");
    return;
  }

  if (email.value === "") {
    alert("Precisamos do seu e-mail.");
    return;
  }

  if (telefone.value === "") {
    alert("Preencha o seu telefone.");
    return;
  }

  if (senha.value === "") {
    alert("Você precisa criar uma senha.");
    return;
  }

  if (confirm.value === "") {
    alert("Por favor, confirme sua senha.");
    return;
  }

  alert("O seu formulário foi enviado!");
  form.submit(); 
});