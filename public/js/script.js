const signupForm = document.getElementById('signup-form');
console.log('signupForm');

if (signupForm) {
  signupForm.onsubmit = () => {
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirm-senha').value;

    if (senha !== confirmSenha) {
      document.getElementById('confirm-senha-error').innerHTML =
        'As senhas não coincidem.';
      return false;
    }
    return false;
  };
}
