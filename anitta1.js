function btn() {
    var resposta = prompt("Qual a opção vc deseja?")
   
    function fase1 (resposta){
        if(resposta == 2 ){
            alert (`Você perdeu!
            O zumbis atacaram a Anitta e seus fãns, transformando todos em zumbis.`)
        }else if (resposta == 1 ){
            alert ("Parabens, você passou para a proxima fase!")
            location.replace("anitta2.html")
        }else{
            alert ("Opção invalida")
        }
    }
 fase1(resposta)
}