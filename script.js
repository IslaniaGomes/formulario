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
    alert("Por favor, precisamos do seu nome.");
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

cpf.addEventListener('input', (e) => {
  let cpfValue = e.target.value;

  cpfValue = cpfValue.replace(/\D/g, '');

  if (cpfValue.length > 3 && cpfValue.length <= 6) {
      cpfValue = cpfValue.slice(0, 3) + '.' + cpfValue.slice(3);
  } else if (cpfValue.length > 6 && cpfValue.length <= 9) {
      cpfValue = cpfValue.slice(0, 3) + '.' + cpfValue.slice(3, 6) + '.' + cpfValue.slice(6);
  } else if (cpfValue.length > 9) {
      cpfValue = cpfValue.slice(0, 3) + '.' + cpfValue.slice(3, 6) + '.' + cpfValue.slice(6, 9) + '-' + cpfValue.slice(9, 11);
  }
  e.target.value = cpfValue;
});

telefone.addEventListener('keypress', () => {
  let telelength = telefone.value.length

  if(telelength === 0) {
      telefone.value += '('
  } 
  if( telelength === 3) {
      telefone.value += ') '
  }
})

   let inputtele = document.getElementById('telefone');

   inputtele.addEventListener('keypress', (e) => {
    
    if (/[a-zA-Z]/.test(e.key)) {
        e.preventDefault();
    }
});
