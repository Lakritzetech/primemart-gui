function addEmployee() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const cpf = document.querySelector('#cpf').value;
    const shift = document.querySelector('#shift').value;
    const phone = document.querySelector('#phone').value;
  
    const employeeData = {
      name,
      email,
      cpf,
      shift,
      phone
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
  