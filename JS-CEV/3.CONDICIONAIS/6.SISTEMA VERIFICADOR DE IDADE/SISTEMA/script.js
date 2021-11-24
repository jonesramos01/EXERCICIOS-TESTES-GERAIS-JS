function verificar(){
    //alert("Função verificar ok!"); //Testar botão

    //DATA ATUAL:
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();

    //DATA DO FORMULÁRIO:
    var anoForm = window.document.getElementById("txtano");

    //MENSAGEM (RESULTADO):
    var msg = window.document.getElementById("msg");

    //IMAGEM EM JS (DINÂMICA): 
    var img = window.document.createElement("img");
    img.setAttribute("id", "foto");

    if(anoForm.value.length == 0 || Number(anoForm.value) > anoAtual){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var sexForm = window.document.getElementsByName("radsex");
        var idade = anoAtual - Number(anoForm.value);
        //msg.innerHTML = `Idade calculada: ${idade}`; //Teste cálculo

        var genero = "";
        if(sexForm[0].checked){
            genero = "Homem";

            if(idade >= 0 && idade < 10){
                //Criança:
                img.setAttribute("src", "assets/homem-bebe.jpg")
            } else if(idade < 21){
                //Jovem:
                img.setAttribute("src", "assets/homem-jovem.jpg")
            } else if(idade < 60){
                //Adulto:
                img.setAttribute("src", "assets/homem-adulto.jpg")
            } else {
                //Idoso:
                img.setAttribute("src", "assets/homem-idoso.jpg")
            }


        } else if(sexForm[1].checked) {
            genero = "Mulher";

            if(idade >= 0 && idade < 10){
                //Criança:
                img.setAttribute("src", "assets/mulher-bebe.jpg")
            } else if(idade < 21){
                //Jovem:
                img.setAttribute("src", "assets/mulher-jovem.jpg")
            } else if(idade < 60){
                //Adulto:
                img.setAttribute("src", "assets/mulher-adulta.jpg")
            } else {
                //Idoso:
                img.setAttribute("src", "assets/mulher-idosa.jpg")
            }

        }
        msg.innerHTML = `Detectado ${genero} de ${idade} anos.`;
        msg.appendChild(img) //Obs: Para acrescentar dentro da mensagem: msn a imagem: img 

    }
}