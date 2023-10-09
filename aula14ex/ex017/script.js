//RESOLUÇÃO

function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert(`Por favor, digite um número!`)
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n}*${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

/*function resultado(){
    var num = Number(window.document.getElementById('num').value)
    var vezes = 0
    while(vezes<=10){
        var conta = num*vezes
        document.write(`${num}*${vezes} = ${conta}`)
        vezes++
    }
}*/

    //O código apenas funciona com o var num dentro da função. Explicação:
    
    /*Em JavaScript, as variáveis têm escopos, que determinam onde uma variável pode ser acessada e usada. Existem dois principais tipos de escopo em JavaScript:

Escopo Global: Variáveis declaradas fora de qualquer função têm escopo global. Isso significa que essas variáveis podem ser acessadas e modificadas de qualquer lugar no seu código JavaScript, incluindo funções.

Escopo Local (ou de Função): Variáveis declaradas dentro de uma função têm escopo local. Isso significa que elas só podem ser acessadas e usadas dentro dessa função específica.

No seu código, a variável num está declarada fora da função resultado, o que a coloca no escopo global. Quando o código JavaScript é carregado em uma página da web, ele é executado pelo navegador em um ambiente global. No entanto, ele só é executado uma vez, quando a página é carregada.

Se você declarar a variável num fora da função resultado, ela será inicializada com o valor do elemento de ID 'num' no momento em que o código é carregado. Se o elemento 'num' ainda não existe quando o código é executado, document.getElementById('num') retornará null e, portanto, num será definido como NaN (Not-a-Number).*/ 

//É possível declarar a função global porém há de chamar na função exemplo: var num; function ...(){num = window.document.getElementById('num')}
