let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

//console.log(valores)

/*console.log(valores[0])
console.log(valores[2])
...*/

/*for(comeco=0; comeco<valores.length; comeco++){
    console.log(`A posição ${comeco} tem o valor de ${valores[comeco]}`)
}*/

for(let comeco in valores){
    console.log(`A posição ${comeco} tem o valor de ${valores[comeco]}`)
}