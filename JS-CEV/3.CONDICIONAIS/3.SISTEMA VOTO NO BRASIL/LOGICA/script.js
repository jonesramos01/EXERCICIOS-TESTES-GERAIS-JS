//TESTES PRÉVIOS JS:

//MAIOR DE IDADE
/*
var idade = 16;
if (idade > 18){
    console.log(`Maior de idade`);
} else {
    console.log(`Menor de idade`)
}
*/

//VOTO NO BRASIL
/**/
var idade = 35;
console.log(`Voce tem ${idade} anos`)
if (idade < 16){
    console.log(`Não vota`)
} else {
    if (idade >= 18 && idade <= 70){
        console.log(`Voto obrigatório`)
    } else {
        if (idade >= 16 && idade < 18 || idade > 70){
            console.log(`Voto opcional`)
        }
    }
}
