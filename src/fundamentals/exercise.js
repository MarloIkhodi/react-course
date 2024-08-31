// function validaIdade(idade) {
//   return idade >= 18
//     ? console.log("Pode comprar")
//     : console.log("Nao pode comprar");
// }

// const age = 16;

// const massage = age >= 18 ? "Você é maior de idade" : "Você é menor de idade";

// console.log(massage);

// const num = 26;

// const isPar = num % 2 == 0 ? "O numero é par!" : "O numero é impar";

// console.log(isPar);

// function validarParidade(numero) {
//   return numero % 2 === 0
//     ? console.log("O numero é par!")
//     : console.log("O numero é impar"); //dentro do ternario, recomenda-se o uso de 3 =
// }

// validarParidade();

// function validarFidelidade(clienteFidelidade = false) {
//   return clienteFidelidade === true
//     ? console.log("Cliente em fidelidade, desconto de 10%")
//     : console.log("Cliente novo, desconto de 10%");
// }

// validarFidelidade();

// function validarIdadeIf(idade) {
//   if (idade >= 18) {
//     return console.log("É maior de idade");
//   } else {
//     return console.log("É menor de idade");
//   }
// }

// validarIdadeIf(19);

// function validaNota(nota) {
//   if (nota >= 7) {
//     return console.log("Aprovado");
//   } if (nota >= 5 && nota <= 6) {
//     return console.log("Recuperação");
//   } else {
//     return console.log("Reprovado");
//   }
// }

// validaNota(7)

// function validaNumero(numero) {
//   if (numero > 0) {
//     return console.log("Número Positivo");
//   } else if (numero < 0) {
//     return console.log("Número Negativo");
//   } else {
//     return console.log("Número Zero");
//   }
// }
// validaNumero(-100);

// function diaDaSemana(dia) {
//     switch (dia) {
//         case 1: return console.log("Domingo")
//         case 2: return console.log("Segunda-Feira")
//         case 3: return console.log("Terça-Feira")
//         case 4: return console.log("Quarta-Feira")
//         case 5: return console.log("Quinta-Feira")
//         case 6: return console.log("Sexta-Feira")
//         case 7: return console.log("Sabado")
//         default: return console.log("dia invalido")
//     }
// }
// diaDaSemana(3)

function knowledgeLevel(level) {
    switch (level) {
        case "Iniciante": return console.log("Iniciante: É alguém que está começando a aprender um novo assunto ou habilidade. Neste nível, a pessoa tem pouca ou nenhuma experiência e está focada em entender os conceitos básicos e as técnicas fundamentais.")
        case "Intermediário": return console.log("Intermediário: Neste estágio, a pessoa já possui uma compreensão sólida dos fundamentos e começa a aplicar o conhecimento em situações mais complexas. O aprendiz intermediário é capaz de resolver problemas comuns e está em transição para desafios mais sofisticados.")
        case "Avançado": return console.log("Avançado: Um indivíduo avançado tem um domínio profundo da área. Ele consegue lidar com situações complexas, solucionar problemas difíceis e pode até ensinar ou liderar outros. Este nível implica um alto grau de competência e experiência prática.")
        default: return console.log("Não indentificado")
    }
}

knowledgeLevel("Intermediário")