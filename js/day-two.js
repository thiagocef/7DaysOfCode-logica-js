const nome = prompt(`Qual o seu nome?`),
      idade = prompt(`Quantos anos você tem?`),
      linguagem = prompt(`Qual linguagem de programação você está estudando?`)


alert(`Olá, ${nome}. Você tem ${idade} anos e já está aprendendo ${linguagem}!`)

const pergunta = prompt(`Você gosta de estudar ${linguagem}?\n 1 - SIM\n 2 - NÃO.`)

if(pergunta == 1) {
    alert(`Muito bom! Continue estudando e você terá muito sucesso.`)
} else {
    alert(`Ahh que pena... Já tentou aprender outras linguagens?`)
}