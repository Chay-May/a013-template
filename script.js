//AULA ONLINE 013

/*console.log('Prática guiada 1 - if e if')

const idadeDependente = prompt("Solicitação de dependente \nQual a idade do dependente?")*/

//Com ifs aninhados

/*if (idadeDependente >= 13) {
    if(idadeDependente < 18){
        console.log('Seu filho já pode ter um cartão nominal vinculado ao seu');
    } else {
        console.log('Consulte outras possibilidades do Labank');
    }
} else {
    console.log('Consulte outras possibilidades do Labank');
}*/

//OU

//Com ifs e operadores lógicos

/*if (idadeDependente >= 13 && idadeDependente < 18) {
    console.log('Seu filho já pode ter um cartão nominal vinculado ao seu');
} else {
    console.log('Consulte outras possibilidades do Labank');
}*/

/*console.log('Prática guiada 2 - if ternário')

const idadeDependente = Number(prompt("Solicitação de dependente \nQual a idade do dependente?"))

console.log (idadeDependente === 13?'Já pode ter um cartão' : 'Verifique as oções possíveis')*/

//Com switch - case

/*console.log('Prática guiada 3 - switch - case')

const numRamal = Number(prompt("Solicitação de cartão de crédito, digite a opção desejada: \n1- Fácil \n2- Black \n3- Platinum \n4- Master Gold"))

switch (numRamal) {
    case 1:
        console.log("Cartão Fácil adquirido")
         break;
    case 2: 
        console.log("Cartão Black adquirido")
        break;
    case 3:
        console.log("Cartão Platinum adquirido")
        break;
    case 4:
        console.log("Cartão Master Gold adquirido")
        break;
    default:
        console.log("Escolha uma das opções disponíveis")
}*/

//____________________________________________________________
//EXERCÍCIOS DE FIXAÇÃO

//const num = +prompt("Insira um número:")

/*if(num%3 === 0){
    console.log('O número inserido é divisível por 3')
 if(num%2 === 0){
    console.log('O número inserido é divisível por 3')
} else {
    console.log('O número inserido não é divisível por 2')
} 
} else {
    console.log('O número inserido não é divisível por 3')
}*/

// USANDO OPERADORES LÓGICOS

/*if (num%3 === 0 && num%2 === 0) {
    console.log('O número inserido é divisível')
} else {
    console.log('O número inserido não é divisível')
}*/

//USANDO IF TERNÁRIO

//console.log (num === 30?'UFA! ACERTEI!!! :)' : 'NÃO FOI DESSA VEZ :(')

//USANDO SWITCH

const num = Number(prompt("Escolha um número multiplo de 6: "))

switch (num) {
    case 6:
        console.log("Oba!!! Existe o número 6")
         break;
    case 12: 
        console.log("Oba!!! Existe o número 12")
        break;
    case 18:
        console.log("Oba!!! Existe o número 18")
        break;
    case 24:
        console.log("Oba!!! Existe o número 24")
        break;
    case 30:
        console.log("Oba!!! Existe o número 30")
    default: 
    console.log("Escolha outra opção")
}


