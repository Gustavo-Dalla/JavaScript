function resultado(){
    var num = Number(document.getElementById('num').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.getElementById('passo').value)
    var txt = document.getElementById('txt')
    var sequencia = [] //Armazena todos os numeros em uma lista, ou então pode ser em ''
    do{
        sequencia += `${num} ` //Adciona cada resultado ou seja: 10+2 -> ´10 12´ -> 12+2 -> ´10 12 14´ (Adiciona a sequencia na string).... OU ENTÃO USAR O METODO .join (mais profissional)
        num +=passo
    }while(num<=fim)
    txt.innerHTML = sequencia //Muda o txt para a sequencia completa
}


//A TERMINAR...