var per = window.document.getElementById('num')
var num = Number(per.value)
var vezes = 0
function resultado(){
    while(vezes<=10){
        var conta = num*vezes
        document.write(`${num}*${vezes} = ${conta}`)
        vezes++
    }
}
//A terminar