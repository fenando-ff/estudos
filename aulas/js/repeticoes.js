// // for (inicialização; condição; incremento){

// // }
// for (let i = 1; i <= 5; i++){
//     console.log('Contagem: ' + 1);
// }

// // Contagem: 1
// // Contagem: 2
// // Contagem: 3
// // Contagem: 4
// // Contagem: 5

// for (let i = 5; i >= 1; i--){
//     console.log('Contagem regressiva: ' + i);
// }

// // Contagem regressiva: 5
// // Contagem regressiva: 4
// // Contagem regressiva: 3
// // Contagem regressiva: 2
// // Contagem regressiva: 1

// let i = 1;

// while (i <= 5){
//     console.log('Contagem com while: ' +  1);
//     i++;
// }

// let senhaCorreta = '1234';
// let senhaDigitada;

// do {
//     senhaDigitada = prompt('Digite a senha: ');
// }  while (senhaDigitada !== senhaCorreta);

// alert('Senha Correta! Acesso permitido.')


// let soma = 0;

// for (let i = 1; 1 <= 100; i++){
//     soma += i;
//     console.log(`Somando ${i}: Total até agora = ${soma}`);

//     if (soma > 100){
//         console.log(`Soma passou de 100 no número ${i}. Interrompendo com break.`);
//         break;
//     }
// }


// console.log(`Soma final (interrompida) = ${soma}`);

// function calcularSoma(){
//     let soma = 0;
//     for (let i = 1; i <= 100; i++){
//         soma += i;
//     }
//     console.log('A soma dos números de 1 a 100 é: ' + soma);
// }


// function somarNumeros(){
//     let soma = 0;
//     let numero;
   
//     while (true){
//     numero = Number(prompt('Digite um número (0 para parar):'));
//     if (numero === 0) break;
//     soma += numero;
// }
// console.log('A soma dos números digitados é: ' + soma);
// }

function multiplosFor(){
    let Resultado = ''
    for (let i = 1; i <= 50; i++){
        if (i % 3 === 0){
            Resultado += i + ' '
        }
    }
    document.getElementById('Resultado').innerText = 'Múltiplos de 3 (for): ' + Resultado;
}

function multiplosWhile(){
    let Resultado = '';
    let i = 1;
    while (i <= 50){
        if (1 % 3 === 0){
            Resultado += i + ' ';
        }
        i++;
    }
    document.getElementById('Resultado').innerText = 'Múltiplos de 3 (while): ' + Resultado;
}