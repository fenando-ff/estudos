function adicionarAluno() {
    let nome = document.getElementById("nomeAluno").value.trim();
    let nota = document.getElementById("notaAluno").value.trim();

    if (nome === "" || nota === "") {
        alert("Preencha nome e nota");
        return;
    }

    nota = parseFloat(nota);

    let tabela = document.querySelector("#tabelaNotas tbody");

    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${nome}</td>
        <td class="nota">${nota}</td>
        <td><button onclick="removerLinha(this)">Remover</button></td>
    `;

    if (nota < 6) {
        tr.classList.add('reprovado');
    }

    tabela.appendChild(tr);

    document.getElementById("nomeAluno").value = "";
    document.getElementById("notaAluno").value = "";
}

function removerLinha(botao) {
    botao.parentElement.parentElement.remove();
}

function calcularMedia() {
    let notas = document.querySelectorAll(".nota");
    if (notas.length === 0) {
        alert("Nenhuma nota cadastrada!");
        return;
    }

    let soma = 0;
    notas.forEach(n => soma += parseFloat(n.innerText));

    let media = soma / notas.length;
    document.getElementById("resultadoMedia").innerText = "Média da turma: " + media.toFixed(2);
}
