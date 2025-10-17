let dots = document.querySelectorAll(".dot-carrossel");

dots.forEach(dot => {
    dot.addEventListener("click", () =>{
        if(!dot.classList.contains("ligado")){
            dots.forEach(ponto =>{
                ponto.classList.remove("ligado");
            });
            dot.classList.add("ligado");
        } else {
            dot.classList.remove("ligado");
        };
    });
});