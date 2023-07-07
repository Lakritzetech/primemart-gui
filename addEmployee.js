function addEmployee() {
  const cpf = document.querySelector('#cpf').value.replace(/\D/g, '');

  if (cpf.length !== 11) {
    document.getElementById('cpfError').textContent = 'CPF deve ter 11 dígitos';
    return;
  }

  const employeeData = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    cpf,
    shift: document.querySelector('#shift').value,
    phone: document.querySelector('#phone').value
  };

  axios.post('http://localhost:8080/employee', employeeData)
    .then(response => {
      console.log('Funcionário adicionado com sucesso:', response.data);
      document.querySelector('#addEmployeeForm').reset();
    })
    .catch(error => {
      const errorMessage = error.response.data.message;
      document.getElementById('cpfError').textContent = errorMessage;
    });
}

function goToIndex() {
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
  const cpfInput = document.querySelector('#cpf');
  cpfInput.placeholder = '123.456.789-00';

  cpfInput.addEventListener('input', function(event) {
    const value = event.target.value.replace(/\D/g, '').slice(0, 11);
    const formattedValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    cpfInput.value = formattedValue;
  });
});