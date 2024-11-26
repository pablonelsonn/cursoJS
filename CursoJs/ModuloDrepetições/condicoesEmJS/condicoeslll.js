                        //EXEMPLO 
idade = 18
if (idade < 16) {
    console.log(`Voce tem ${idade} anos, nao vota`)
} else if (idade < 18){
    console.log(`Voce tem ${idade} anos, seu voto e opcional`)
}else if  (idade >= 65) {
    console.log(`O senhor(a) tem ${idade} anos, e esta incento do voto`) 
}else if (idade >= 18 ) {
    console.log(`Voce tem ${idade} anos, e obrigatorio votar`,) 
}

                        //EXEMPLO 2

var agora = new Date()
var hora = agora.getHours

console.log(`Agora sao exatamente ${hora}h.`)
if (hora < 12 ) {
    console.log(`Bom Dia`)
}else if (hora <= 18 ) {
    console.log(`Boa Tarde`)
}else  {
    console.log(`Boa Noite`)
}