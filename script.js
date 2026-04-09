const cadastrar = document.getElementById('cadastrar');

cadastrar.addEventListener('click', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirme_sua_senha').value;
    
    // Validar se os campos estão preenchidos
    if (!nome || !email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Validar se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }
    
    // Se tudo estiver correto, fazer o cadastro
    alert('Cadastro realizado com sucesso!');
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('confirme_sua_senha').value = '';
    window.location.href = 'index.html';
});

