// let n = parseInt(prompt('Digite um número de 0 a 6.'))

// switch(n){
//     case 0:
//         alert('Domingo')
//         break;
//     case 1:
//         alert('Segunda-Feira')
//         break;
//     case 2:
//         alert('Terça-Feira')
//         break;
//     case 3:
//         alert('Quarta-Feira')
//         break;
//     case 4:
//         alert('Quinta-Feira')
//         break;
//     case 5:
//         alert('Sexta-Feira')
//         break;
//     case 6:
//         alert('Sabádo')
//         break;
// }


// let idade = parseInt(prompt('Qual é a sua idade?'))

// if (isNaN(idade) || idade < 0){
//     alert('Por favor, insira uma idade válida')
// } else if (idade < 12){
//     alert('Você é uma criança. Contéudo restrito para sua faixa etária.')
// } else if (idade >= 12 && idade < 18){
//     alert('Você é um adolescente. Alguns contéudos podem estar bloqueados.')
// } else if (idade >= 18 && idade < 60){
//     alert('Você é adulto. Tem acesso total ao contéudo.')
// } else{
//     alert('Você é idoso. Contéudo disponivel com algumas recomedações')
// }

// let peso = parseFloat(prompt('Qual é o seu peso em kg?'))
// let altura = parseFloat(prompt('Qual é a sua altura em metros?'))

// if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
//     alert('Por favor, insira valores válidos para peso e altura.')
// } else {
//     let imc = peso / (altura * altura)
//     imc = imc.toFixed(2)

//     if (imc < 18.5) {
//         alert(`Seu IMC é ${imc}. Você está abaixo do peso.`)
//     } else if (imc >= 18.5 && imc < 24.9) {
//         alert(`Seu IMC é ${imc}. Você está com peso normal.`)
//     } else if (imc >= 25 && imc < 29.9) {
//         alert(`Seu IMC é ${imc}. Você está com sobrepeso.`)
//     } else if (imc >= 30 && imc < 34.9) {
//         alert(`Seu IMC é ${imc}. Obesidade grau I.`)
//     } else if (imc >= 35 && imc < 39.9) {
//         alert(`Seu IMC é ${imc}. Obesidade grau II.`)
//     } else {
//         alert(`Seu IMC é ${imc}. Obesidade grau III (mórbida).`)
//     }
// }

let peso = parseFloat(prompt('Qual é o seu peso em kg?'))
let altura = parseFloat(prompt('Qual é a sua altura em metros?'))

let imc = peso / (altura * altura)

alert('Seu IMC é: ' + imc)

if (imc < 18.5){
    alert('Você está abixo do peso')
} else if (imc >= 18.5 && imc < 25){
    alert('Você está com o peso normal')
} else if (imc >= 25 && imc < 30){
    alert('Você está com sobre peso')
} else {
    alert('Você está obeso')
}