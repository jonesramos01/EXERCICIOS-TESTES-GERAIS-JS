function somar(){
        
    //1º)Criar as variáveis das ID's:
    var tn1 = window.document.getElementById("txtn1");
    var tn2 = window.document.getElementById("txtn2");
    var res = window.document.getElementById("res");
    
    //2º)Criar as variáveis dos VALORES:
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 + n2; 
    
    //res.innerHTML = s; 
    //Ou:
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a: <strong>${s}</strong>`; 
}