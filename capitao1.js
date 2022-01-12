function btn() {
    var resposta = prompt("Qual a opção vc deseja?")
   
    function fase1 (resposta){
        if(resposta == 1 ){
            alert (`Você perdeu!
            A noticia não é fake news, a cidade realmente etá sofrendo um ataque zumbi.`)
        }else if (resposta == 2){
            alert ("Parabens, você passou para a proxima fase!")
            location.replace("capitão2.html")
        }else{
            alert ("Opção invalida")
        }
    }
 fase1(resposta)
}