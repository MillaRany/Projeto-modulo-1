function btn() {
    var resposta = prompt("Qual a opção vc deseja?")
   
    function fase1 (resposta){
        if(resposta == 1 ){
            alert (`Você perdeu!
            Os zumbis não morrem com tiros, eles só morrem bombardeados.`)
        }else if (resposta == 2 ){
            alert ("Parabens, você passou para a proxima fase!")
            location.replace("capitao3.html")
        }else{
            alert ("Opção invalida")
        }
    }
 fase1(resposta)
}