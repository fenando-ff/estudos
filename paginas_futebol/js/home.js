let valor = 1
while(valor == 1){
    let n1 = parseInt(prompt("digite o 1° número"));
    let n2 = parseInt(prompt("digite o 2° número"));
    let escolha = parseInt(prompt(`1) ${n1} x ${n2} \n 2) ${n1} + ${n2} \n 3) ${n1} / ${n2} \n 4) ${n1} - ${n2} \n 5) media \n 6) exit`))

    switch (escolha) {
        case 1:
            console.log(n1*n2);
            break;
        case 2:
            console.log(n1+n2);
            break;
        case 3:
            if (n2 < 1){
                console.log("Divisão impossível");
            } else {
                console.log(n1/n2);
            }
            break;
        case 4:
            console.log(n1-n2);
            break;
        case 5:
            let media = (n1+n2)/2;
            console.log(media);

            if(media < 7 || n1== 0 || n2 == 0){
                console.log("Reprovado");
            }else {
                console.log("Aprovado");
            }
            break
        case 6:
            valor = 0;
            break;
        default:
            console.log("digite um número válido")
            break;
    };
};