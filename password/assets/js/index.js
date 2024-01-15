function verificarPassword() {
  let password1 = document.getElementById('select_password1').value;
  let password2 = document.getElementById('select_password2').value;
  let password3 = document.getElementById('select_password3').value;

  if (password1 === '9' && password2 === '1' && password3 === '1') {
    mostrarResultado('password 1 correcto');
  } else if (
    select_password1 === '7' &&
    select_password2 === '1' &&
    select_password3 === '4'
  ) {
    mostrarResultado('password 2 correcto');
  } else {
    mostrarResultado('password incorrecto');
  }
}

function mostrarResultado(mensaje) {
  document.getElementById('resultado').textContent = mensaje;
}
