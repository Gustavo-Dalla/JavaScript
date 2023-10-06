function resultado(){
    var num = Number(document.getElementById('num').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.getElementById('passo').value)
    var txt = document.getElementById('txt')
    var sequencia = [] //Armazena todos os numeros em uma lista, ou então pode ser em ''
    if(num==0){
        txt.innerHTML = `Impossível contar!`
    }else if(passo==0){
        alert("Passo inválido! Começando pelo passo 1")
    do{
        sequencia += `${num} ` //Adciona cada resultado ou seja: 10+2 -> ´10 12´ -> 12+2 -> ´10 12 14´ (Adiciona a sequencia na string).... OU ENTÃO USAR O METODO .push (mais profissional)
        num ++
    }while(num<=fim)
    txt.innerHTML = sequencia //Muda o txt para a sequencia completa
    }
    do{
        sequencia += `${num} ` //Adciona cada resultado ou seja: 10+2 -> ´10 12´ -> 12+2 -> ´10 12 14´ (Adiciona a sequencia na string).... OU ENTÃO USAR O METODO .push (mais profissional)
        num +=passo
    }while(num<=fim)
    txt.innerHTML = sequencia //Muda o txt para a sequencia completa
}