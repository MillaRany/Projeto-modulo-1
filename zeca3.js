function btn() {
    var resposta = prompt("Qual a opção vc deseja?")
   
    function fase1 (resposta){
        if(resposta == 1 ){
            alert (`Você perdeu!
            O zumbis estavam preso no elevador e atacaram Zeca Pagodinho quando ele tentou entrar.`)
        }else if (resposta == 2 ){
            alert (`Parabens, você venceu!
            Zeca Pagodinho consegui subir para o heliponto e foi resgatado pelo helicoptero`)
            location.replace("index.html")
        }else{
            alert ("Opção invalida")
        }
    }
 fase1(resposta)
}