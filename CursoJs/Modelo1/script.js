function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagens')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h...`
    if (hora >= 0 && hora <= 12) {
        img.src = "fotomanha.png"
        document.body.style.background = '#f5be58'
    } else if (hora >= 12 && hora <= 18) {
        img.src = "fototarde.png"
        document.body.style.background = '#d99973'
    }else {
        img.src = "fotonoite.png"
        document.body.style.background = '#000000'
    }


}