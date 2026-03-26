const cadastrar = document.getElementById('cadastrar');

cadastrar.addEventListener('click', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (nome && email && senha) {
        alert('Cadastro realizado com sucesso!');
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
        window.location.href = 'index.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }

    
});