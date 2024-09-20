const form     = document.querySelector('#form');
const nome     = document.querySelector('input#nome');
const cpf      = document.querySelector('input#cpf');
const email    = document.querySelector('input#email');
const telefone = document.querySelector('input#telefone');
const senha    = document.querySelector('input#senha');
const confirm  = document.querySelector('input#confirm');
const campos   = document.querySelectorAll('.required');
const spans    = document.querySelectorAll('.span-required');

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

form.addEventListener('submit', (event) => {
  let formIsValid = true;

  
  if (!validaNome()) formIsValid = false;
  if (!validaCpf()) formIsValid = false;
  if (!validaEmail()) formIsValid = false;
  if (!validaSenha()) formIsValid = false;
  if (!senhaConfirm()) formIsValid = false;

  
  if (!formIsValid) {
    event.preventDefault();
    validaNome()
    validaCpf()
    validaEmail()
    validaTel()
    validaSenha()
    senhaConfirm()
  }
});

function exibeErro(index) {
  campos[index].style.border = '2px solid #b80b0b';
  spans[index].style.display = 'block';
}

function removeErro(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function validaNome() {
  if (campos[0].value === '') {
    exibeErro(0);
    return false;
  } else {
    removeErro(0);
    return true;
  }
}

function validaCpf() {
  if (campos[1].value === '') {
    exibeErro(1);
    return false;
  } else {
    removeErro(1);
    return true;
  }
}

function validaEmail() {
  if (campos[2].value === '') {
    exibeErro(2);
    return false;
  } else {
    removeErro(2);
    return true;
  }
}

function validaTel() {
  if (campos[3].value === '') {
    exibeErro(3);
    return false;
  } else {
    removeErro(3);
    return true;
  }
}

function validaSenha() {
  if (campos[4].value.length < 8) {
    exibeErro(4);
    return false;
  } else {
    removeErro(4);
    return true;
  }
}

function senhaConfirm() {
  if (campos[5].value != campos[4].value) {
    exibeErro(5);
    return false;
  } else {
    removeErro(5);
    return true;
  }
}



