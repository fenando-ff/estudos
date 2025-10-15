// "" = puxando para o doom
let caixa_masculina = document.getElementById("caixa_m");
let caixa_feminina = document.getElementById("caixa_f");

caixa_masculina.addEventListener("click", ()=>{
    if(caixa_feminina.style.backgroundColor=="") {
        caixa_masculina.style.backgroundColor = "#f6f6f6"
        caixa_masculina.style.transition = "0.3s"
    }  else {
        caixa_feminina.style.backgroundColor=="none"
        caixa_masculina.style.backgroundColor=="none"

    }




});

// "" = vazio
// " " = contem espaço
