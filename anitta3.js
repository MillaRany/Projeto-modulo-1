function btn() {
    var resposta = prompt("Qual a opção vc deseja?")
   
    function fase1 (resposta){
        if(resposta == 1 ){
            alert (`Você perdeu!
            O zumbis estavam preso no elevador e atacaram Anitta quando ela tentou entrar.`)
        }else if (resposta == 2 ){
            alert (`Parabens, você venceu!
            Anitta consegui subir para o heliponto e foi resgatada pelo helicoptero`)
            location.replace("index.html")
        }else{
            alert ("Opção invalida")
        }
    }
 fase1(resposta)
}