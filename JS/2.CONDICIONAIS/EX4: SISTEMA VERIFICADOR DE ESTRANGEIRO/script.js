//1º)CRIAR AS VARIÁVEIS DAS ID'S
//2º)CRIAR AS VARIÁVEIS DOS VALORES
//3º)CRIAR AS FUNÇÕES

function verificar(){
    var txtpais = window.document.getElementById("txtpais");
    var res = window.document.getElementById("res");
    var pais = txtpais.value;
    res.innerHTML = `<p>O seu país é ${pais}</p>`;

    if(pais == "Brasil" || pais == "brasil" || pais == "BRA"){
        res.innerHTML += `<p>Você é brasileiro!</p>`;
    } else {
        res.innerHTML += `<p>Você é estrangeiro!</p>`;
    }
}