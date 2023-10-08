//RESOLUÇÃO

function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ //Se o input ficar vazio: alert
        window.alert("[ERRO] faltam dados!")
        res.innerHTML = `Impossível contar!`
    }else{
        res.innerHTML = `Contando: <br>` //Se o input não fica vazio faça a função das contas
        let i = Number(ini.value) //Puxando a variavel no tipo número e o valor dela
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){ //Se passo for 0 ele vai fazer passo 1 ou seja sempre +1
            window.alert(`Passo invalido! Considerando PASSO 1`)
            p = 1 //Passo vai ser um e vai para baixo
        }
        if(i < f){ //Se o inicio(20) for menor que o fim(21) faz a função de SOMA de passo 
            for(let c = i; c <= f; c += p){ //Loop c(começo) é o inicio o valor que a pessoa informar exeplo 21, enquanto o 21 for menor que 25 ele faz e soma 1 (exemplo) e faz isso até ser maior ou igual
                res.innerHTML += `${c} \u{1F449}` //Dentro da variavel res adiciona a variavel c já somada mais um emoji e faz o loop novamente até o c for maior que o fim
        }
    }else{ //Senão o inicio(20) for maior que o fim (15) faz a função de SUBTRAÇÃO de passo
        for(let c = i; c >= f; c -=p){ //Loop c(começo) é o valor inicial, exemplo 25, enquanto 25 for maior que 20 ele faz o loop e tira um(passo): 25 -> 24 -> 23.... -> 20 -> Para
                res.innerHTML += `${c} \u{1F449}`//Dentro da variavek res ele adiciona(concatena) o valor inicial após a operação da conta e um emoji até atingir a requisição
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}


/*function resultado(){
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
}*/