//TESTES PRÉVIOS JS:

//HORA DO DIA = BOM DIA, BOA TARDE, BOA NOITE
//A manhã, das 6h às 12h (ou ao meio-dia). A tarde, das 12h às 18h. A noite, das 18h às 24h (ou meia-noite).

//LÓGICA:

/**/
//1) DATA/HORA (MANUAL):
var hora = 4;

console.log(`Agora são exatamente ${hora} horas`);


/*
//2) DATA/HORA DO PRÓPRIO SISTEMA (AUTOMÁTICO):

var agora = new Date(); //Data/Hora do Sistama
var hora = agora.getHours();

console.log(`Agora são exatamente ${hora} horas`)
*/

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
