let entrada = document.getElementById("digitaTarefa");
let lista = document.getElementById("listaTarefa");
let btn = document.getElementById("btn");

document.addEventListener("DOMContentLoaded", () =>{ // tá esperando a página carregar
    entrada.addEventListener("input", ()=>{ // tá esperando uma mudança de valor no input
        let escrita = entrada.value; 
        if (escrita === "") {
            btn.style.pointerEvents = "none"; // Deixa o botão inclicável com uma propriedade css
            btn.style.backgroundColor = "grey"; // muda a cor do botão
            btn.style.boxShadow = "none";
        } else {
            btn.style.pointerEvents = "auto" // Deixa o botão clicável
            btn.style.backgroundColor = "#002ab6";
            btn.style.boxShadow = "0px 2px 4px #707070";
        };
    });
    entrada.dispatchEvent(new Event("input")); // Faz com que funcione a mudança do botão corretamente ao carregar a página
});

function adicionarTarefa() {
    let texto = entrada.value;
    let li = document.createElement("li");

    li.className = "item-lista"
    lista.appendChild(li);
    li.innerHTML = `<span class="nome-tarefa">${texto} </span>
                    <div class="btns">
                        <button id="feito" onclick="marcar()"><i class="fa-solid fa-check"></i></button>
                        <button id="deletar" onclick="deletar()"><i class="fa-solid fa-xmark"></i></button>
                    </div>`

    entrada.value = ""
};


function marcar() {

};

function deletar() {
    
};