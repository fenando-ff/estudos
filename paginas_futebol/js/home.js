let ativo = document.querySelector(".ligado");
let dots = document.querySelectorAll(".dot-carrossel");

dots.forEach(dot => {
    dot.addEventListener("click", ()=>{
        dot.classList.add("ligado");
    });
});