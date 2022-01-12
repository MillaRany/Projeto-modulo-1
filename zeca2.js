function btn() {
    var resposta = prompt("Qual a opção vc deseja?")
   
    function fase1 (resposta){
        if(resposta == 1 ){
            alert (`Você perdeu!
            Os zumbis já cercaram o aeroporto e tomaram posse de todos os jatos .`)
        }else if (resposta == 2 ){
            alert ("Parabens, você passou para a proxima fase!")
            location.replace("zeca3.html")
        }else{
            alert ("Opção invalida")
        }
    }
 fase1(resposta)
}