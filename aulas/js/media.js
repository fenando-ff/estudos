// let nota1 = 8;
// let nota2 = 10;
// let nota3 = 7;

// let media = (nota1 + nota2 + nota3) / 2;

// if (media >= 7 && media <= 10) {
//   alert("Parabéns, você foi aprovada!");
// } else if (media < 7 && media >= 5) {
//   alert("Você está de recuperação.");
// } else {
//   alert("Infelizmente, você foi reprovada.");
// }

let nota1 = Number(prompt('Digite um número'))
let nota2 = Number(prompt('Digite outro número'))

let media = (nota1 + nota2) /2;

console.log('Nota 1: ', nota1);
console.log('Nota 2: ', nota2);
console.log('Média: ', media);

if (media > 6 && nota1 !== 0 && nota2 !== 0){
    alert('Aprovado');
} else{
    alert('Reprovado')
}