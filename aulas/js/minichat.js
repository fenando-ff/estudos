const chatBox = document.getElementById('chatBox');
const input = document.getElementById('mensagem'); // ✅ corrigido
const btn = document.getElementById('btnEnviar');  // ✅ corrigido

const opcoes = {
    1: 'O horário de funcionamento é das 8h às 18h.',
    2: 'Atualmente, temos promoções em todos os produtos.',
    3: 'Nosso endereço é Rua das Flores, 123 - Centro.',
    4: 'Entre em contato pelo e-mail: suporte@empresa.com.'
};

const menuInicial = `
Olá! 😊 Eu sou o ChatBot da loja. Escolha uma opção:
1️⃣ - Horário de funcionamento  
2️⃣ - Promoções atuais  
3️⃣ - Endereço da loja  
4️⃣ - Contato com o suporte
`;

window.onload = () => {
    criarMensagem(menuInicial, 'bot');
};

input.addEventListener('keypress', e => {
    if (e.key === 'Enter') enviarMensagem();
});

btn.addEventListener('click', enviarMensagem);

function enviarMensagem() {
    const texto = input.value.trim();
    if (texto === "") return;

    criarMensagem(texto, 'usuario');
    input.value = "";
    input.focus();

    setTimeout(() => {
        let resposta;

        if (opcoes[texto]) {
            resposta = opcoes[texto];
        } else {
            resposta = "Desculpe, não entendi. Escolha uma das opções acima (1 a 4).";
        }

        criarMensagem(resposta, 'bot');
    }, 800);
}

function criarMensagem(texto, tipo) {
    const msg = document.createElement('div');
    msg.classList.add('mensagem', tipo);

    const hora = document.createElement('div');
    hora.classList.add('hora');
    const agora = new Date();
    hora.textContent = agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    msg.textContent = texto;
    msg.appendChild(hora);
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}
