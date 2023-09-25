var idade = 18
console.log(`Você tem ${idade} anos.`)
if (idade<18){
    console.log(`Você não pode votar.`)
} else if(idade>=16 || idade>65){
    console.log(`Voto Opcional.`)
} else {
    console.log(`Voto Obrigatório.`)
}