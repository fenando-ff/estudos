function adicionarTarefa(){
    let input = document.getElementById('Tarefa');
    let tarefaTexto = input.value;

    if (tarefaTexto === ""){
        alert('Digite uma tarefa!');
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = `
      <span class="texto">${tarefaTexto}</span>
      <button class="concluir">✓</button>
      <button class="remover">✕</button>
    `;

    document.querySelector('#listaTarefas').appendChild(li);
    input.value = "";
    adicionarEvento();
}

function adicionarEvento(){
    let concluirBotoes = document.getElementsByClassName('concluir');
    for (let i = 0; i < concluirBotoes.length; i++){
        concluirBotoes[i].onclick = function(){
            let tarefa = this.parentElement.querySelector('.texto');
        tarefa.style.textDecoration = 'line-through';
        }
    }
    
    let removerBotoes = document.querySelectorAll('.remover');
    removerBotoes.forEach(function(botao){
        botao.onclick = function(){
            this.parentElement.remove()
        }
    });
}
