function btn() {
    var resposta = prompt("Qual a opção vc deseja?")
   
    function fase1 (resposta){
        if(resposta == 1 ){
            alert (`Você perdeu!
            O zumbis estavam preso no elevador e atacaram Capitão Nascimento quando ele tentou entrar.`)
        }else if (resposta == 2 ){
            alert (`Parabens, você venceu!
            Capitão Nascimento consegui subir para o heliponto e tacar uma bomba que mata todos os zumbis`)
            location.replace("index.html")
        }else{
            alert ("Opção invalida")
        }
    }
 fase1(resposta)
}