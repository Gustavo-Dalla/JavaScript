var valor = [] //Escopo global, por isso não está dentro do if, pra ser usada tanto no add() quanto no fim()
function add(){
    let tab = document.getElementById('seltab')
    let num = document.getElementById('num').value
    let item = document.createElement('option')
    if(num >= 1 && num <=100){
        valor.push(num)
        item.value = num
        item.text = `Valor ${num} adicionado`
        tab.appendChild(item)
}else if (num >100 || num < 1){
    alert(`O número não está entre 1 e 100! Digite novamente.`)
}
if(num.length == 0){
    alert(`Número inválido! Digite novamente.`)
}
}
function fim(){
    if(valor.length == 0){
        alert(`Nenhum número foi encontrado! Digite novamente.`)
        txt.innerHTML = ''
    }
    let txt = document.getElementById('txt')
    let soma = 0
    for(i=0;i<valor.length;i++){
        soma += Number(valor[i]) //Declarando number pois estava concatenando strings e não somando
    }
    valor.sort()
    txt.innerHTML += `<p>Ao todo temos ${valor.length} números cadastrados</p>`
    txt.innerHTML += `<p>O maior valor informado foi ${valor[valor.length - 1]}</p>`//O menos 1 = length de 4 não existe pois ultrapassa 1 pois o índice da array começa no 0 exeplo ([0,1,2,3] lenght=4 -> volta undefined pois o ultimo número é 3)
    txt.innerHTML += `<p>O menor valor informado foi ${valor[0]}</p>`
    txt.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    txt.innerHTML += `<p>A média dos valores digitados é ${soma/valor.length}</p>`
}

/*A ARRUMAR: 1- Quando clica no botao finalizar ele adiciona o texto mais de uma vez / 2- Quando o num está vazio aparece 2 alerts*/