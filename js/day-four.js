//gerando um número aleatório entre 1 e 10
let sorteado = Math.floor(Math.random()*10) + 1
console.log(sorteado)

//armazena os numeros já apostados
let erros = [] 

//definindo o numero máximo de chances
// const chances = 3

let numero = Number(prompt('Escolha um Número entre 0 e 10:'))

for(let chance = 2; chance > 0; chance --) {
    if(numero === sorteado) {
        alert(`Você acertou: ${numero}`)
        break
    } else {
        numero = prompt(`Você errou! Escolha outro número: \nVocê tem ${chance} chances`)
    }
}
