function load(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if (hora >= 0 && hora <12){
        img.src = 'img/manha.png'
        document.body.style.background = '#FEC99C'
    } else if (hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#FE9601'
    } else{
        img.src = 'img/noite.png'
        document.body.style.background = '#222B2D'
    }
}