function verificar(){
    var anonas = window.document.getElementById('ano')
    var res = window.document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()
    if (anonas.value.length == 0 || anonas.value > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else{
        var sex = window.document.getElementsByName('radsex') //pegar com nome pois o radio tem que ser igual
        var idade = Number( ano - anonas.value)
        genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = "Homem"
            if (idade >=0 && idade <12){
                //Criança
                img.setAttribute('src', 'img/criança-h.png')
            } else if (idade >= 12 && idade <21){
                //Jovem
                img.setAttribute('src', 'img/jovem-h.png')
            } else if (idade >= 21 && idade <50){
                //Adulto
                img.setAttribute('src', 'img/adulto-h.png')
            } else if (idade >= 50){
                //Idoso
                img.setAttribute('src', 'img/idoso-h.png')
            }
        } else if (sex[1].checked){
            genero = "Mulher"
            if (idade >=0 && idade <12){
                //Criança
                img.setAttribute('src', 'img/criança-m.png')
            } else if (idade >= 12 && idade <21){
                //Jovem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade >= 21 && idade <50){
                //Adulto
                img.setAttribute('src', 'img/adulto-m.png')
            } else if (idade >= 50){
                //Idoso
                img.setAttribute('src', 'img/idosa-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Seu genero é ${genero} e com ${idade} anos de idade.`
        res.appendChild(img)
    }
}