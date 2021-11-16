//TESTES PRÉVIOS JS:

//HORA DO DIA = BOM DIA, BOA TARDE, BOA NOITE
//A manhã, das 6h às 12h (ou ao meio-dia). A tarde, das 12h às 18h. A noite, das 18h às 24h (ou meia-noite).

//LÓGICA:

/*
var hora = 5;

console.log(`Agora são exatamente ${hora} horas`)

if (hora >= 6 && hora <= 12){
    console.log(`Bom dia!`)
} else {
    if (hora > 12 && hora < 18){
        console.log(`Boa tarde!`)
    } else {
        if (hora >= 18 && hora < 24){
            console.log(`Boa noite!`)
        } else {
            if (hora == 24 || hora >= 00 && hora < 6){
                console.log(`Boa madrugada!`)
            }
        }
    }
}
*/

//BIZU: PEGANDO A HORA DO PRÓPRIO SISTEMA:

var agora = new Date();
var hora = agora.getHours();

console.log(`Agora são exatamente ${hora} horas`)

if (hora >= 6 && hora <= 12){
    console.log(`Bom dia!`)
} else {
    if (hora > 12 && hora < 18){
        console.log(`Boa tarde!`)
    } else {
        if (hora >= 18 && hora < 24){
            console.log(`Boa noite!`)
        } else {
            if (hora == 24 || hora >= 00 && hora < 6){
                console.log(`Boa madrugada!`)
            }
        }
    }
}
