function verificar() {
    var data = new Date()   
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        Window.alert('[Error]')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            if(idade >=0 && idade <= 10 ){
                img.setAttribute('src', 'modelo 2fotos/Menino.png')
            }else if (idade <= 21) {
                img.setAttribute('src', 'modelo 2fotos/Jovem H.png')
            }else if (idade <= 50){
                img.setAttribute('src', 'modelo 2fotos/Adulto H.png')
            }else {
                img.setAttribute('src', 'modelo 2fotos/Senhor M.png')
            }
            genero = 'Hoemem'
        } else if (fsex[1].checked){
            if(idade >=0 && idade <= 10 ){
                img.setAttribute('src', 'modelo 2fotos/Menina.png')
            }else if (idade <= 21) {
                img.setAttribute('src', 'modelo 2fotos/Jovem F.png')
            }else if (idade <= 50){
                img.setAttribute('src', 'modelo 2fotos/Adulto F.png')
            }else {
                img.setAttribute('src', 'modelo 2fotos/Senhora F.png')
            }
            genero = 'Mulher'
        }
        res.style.textAlign = 'Center'
        res.innerHTML = ` Detectamos ${genero} com a ${idade} anos`
        res.appendChild(img)
    }


}