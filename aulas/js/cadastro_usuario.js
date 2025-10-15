const form = document.getElementById('formCadastro');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // evitar o envio automático

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmarSenha');
    const dataNascimento = document.getElementById('data');
    const estado = document.getElementById('estado');

    let valido = true; // controle de validação

    // limpar mensagens anteriores
    document.querySelectorAll('.mensagem').forEach(msg => msg.textContent = '');
    document.querySelectorAll('input, select').forEach(el => el.classList.remove('erro'));
    document.getElementById('msgSucesso').textContent = '';

    // Validar nome
    if (nome.value.trim() === "") {
        document.getElementById('msgNome').textContent = "O nome é obrigatório.";
        nome.classList.add('erro');
        valido = false;
    }

    // Validar email
    if (!email.value.includes('@') || !email.value.includes('.')) {
        document.getElementById('msgEmail').textContent = "Digite um email válido.";
        email.classList.add('erro');
        valido = false;
    }

    // Validar senha
    if (senha.value.length < 6) {
        document.getElementById('msgSenha').textContent = "A senha deve ter no mínimo 6 caracteres.";
        senha.classList.add('erro');
        valido = false;
    }

    // Confirmação de senha
    if (senha.value !== confirmarSenha.value) {
        document.getElementById('msgConfirmar').textContent = "As senhas não coincidem.";
        confirmarSenha.classList.add('erro');
        valido = false;
    }

    // Verificação da idade mínima (13 anos)
    const hoje = new Date();
    const nascimento = new Date(dataNascimento.value);
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();
    const diaAtual = hoje.getDate();
    const diaNascimento = nascimento.getDate();

    // Ajuste de idade se ainda não fez aniversário este ano
    if (
        !dataNascimento.value ||
        idade < 13 ||
        (idade === 13 && (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)))
    ) {
        document.getElementById('msgData').textContent = "É necessário ter mais de 13 anos.";
        dataNascimento.classList.add('erro');
        valido = false;
    }

    // Validar estado
    if (estado.value === "") {
        document.getElementById('msgEstado').textContent = "Selecione um estado.";
        estado.classList.add('erro');
        valido = false;
    }

    // Se tudo estiver válido
    if (valido) {
        document.getElementById('msgSucesso').textContent = "✅ Cadastro realizado com sucesso.";
        form.reset(); // opcional: limpa o formulário após sucesso
    }
});
