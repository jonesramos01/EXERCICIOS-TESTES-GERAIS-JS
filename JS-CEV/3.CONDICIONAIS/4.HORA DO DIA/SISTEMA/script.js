function carregar(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("img");
    
    //AUTOMÁTICO:
    var atual = new Date();
    var hora = atual.getHours();

    //MANUAL:
    //var hora = 5;
    
    msg.innerHTML = `<h3>São exatamente ${hora} horas.</h3>`;
    
    //LÓGICA:
    if (hora == 24 || hora >= 0 && hora < 12){
        //BOM DIA:
        img.src = `assets/bom-dia.jpg`;
        backgroundColor = `rgba(0, 125, 255, 0.900)`;
    
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE:
        img.src = `assets/boa-tarde.jpg`;
        document.body.style.backgroundColor = `#059862`;

    } else if (hora >= 18 && hora < 24 ) {
        //BOA TARDE:
        img.src = `assets/boa-noite.jpg`;
        document.body.style.backgroundColor = `#202124`;

    }
}