function btn() {
    var resposta = prompt("Qual a opção vc deseja?")
   
    function fase1 (resposta){
        if(resposta == 1 ){
            alert (`Você perdeu!
          Os zumbis já cercaram o aeroporto e tomaram posse do jato de Anitta.`)
        }else if (resposta == 2 ){
            alert ("Parabens, você passou para a proxima fase!")
            location.replace("Anitta3.html")
        }else{
            alert ("Opção invalida")
        }
    }
 fase1(resposta)
}