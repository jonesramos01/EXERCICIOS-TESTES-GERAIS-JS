//DIA DA SEMANA
/*
0 = Domingo
1 = Segunda
2 = Terca
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/

/**/
//1) DATA/HORA (MANUAL):
var diaSem = 3;

console.log(`Posição: ${diaSem}`);

/*
//2) DATA/HORA DO SISTEMA (AUTOMÁTICO):
var agora = new Date(); //Pega data/hora atual do sistema e aplica na variável que foi criada
var diaSem = agora.getDay() //getDay() → Dia da semana

console.log(`Posição: ${diaSem}`)
*/

//··············································································

switch (diaSem){
    case 0:
        console.log(`Domingo`)
        break

    case 1:
        console.log(`Dia da semana: Segunda`)
        break

    case 2:
        console.log(`Dia da semana: Terça`)
        break

    case 3: 
        console.log(`Dia da semana: Quarta`)
        break

    case 4:
        console.log(`Dia da semana: Quinta`)
        break

    case 5:
        console.log(`Dia da semana: Sexta`)
        break

    case 6:
        console.log(`Dia da semana: Sábado`)
        break

    default: //Geralmente é usado para a última opção
        console.log(`[ERRO]: Dia inválido!`)

                            
}