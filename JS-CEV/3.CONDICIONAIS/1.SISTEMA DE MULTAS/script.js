//1º)CRIAR AS VARIÁVEl DAS ID'S:
//2º)CRIAR AS VARIÁVEL DOS VALORES:
//3º)CRIAR AS FUNÇÕES:

function verificar(){
    var txtvel = window.document.getElementById("txtvel");
    var res = window.document.getElementById("res")
    
    var vel = Number(txtvel.value);    
    res.innerHTML = `<p>A velocidade do seu veículo é de <strong>${vel} Km/h</strong></p>`
        
        if(vel < 60){
            res.innerHTML += ``
        } else {
            res.innerHTML += "<p>Você será <strong>MULTADO</strong> Por excesso de velocidade!</p>"
        }
        res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
    

}