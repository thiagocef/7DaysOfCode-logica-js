let compras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
}

let ask = prompt('Deseja adicionar uma comida?\n S - Sim\n N - Não')
    comida = '',
    categoria = '',
    cont = 0

while (ask === 's' || ask === 'S') {

    comida = prompt(`Qual comida deseja inserir?`)

    categoria = prompt(`Em qual categoria ${comida} se encaixa?\n 1 - Frutas\n 2 - Laticínios\n 3 - Congelados\n 4 - Doces`)

    switch (categoria) {
        case '1':
            compras.frutas.push(comida)
            break;
        case '2':
            compras.laticinios.push(comida)
            break;
        case '3':
            compras.congelados.push(comida)
            break;
        case '4':
            compras.doces.push(comida)
            break;
        default:
            break;
    }

    ask = prompt('Deseja adicionar uma comida?\n S - Sim\n N - Não')

    cont ++
}

if(compras.frutas.length === 0 && compras.laticinios.length === 0 && compras.congelados.length === 0 && compras.doces.length === 0) {
    alert(`Sua lista de compras está vazia:\n - Frutas: ${compras.frutas}\n - Laticínios: ${compras.laticinios}\n - Congelados: ${compras.congelados}\n - Doces: ${compras.doces}`)

} else {
    alert(`Sua lista de compras:\n - Frutas: ${compras.frutas}\n - Laticínios: ${compras.laticinios}\n - Congelados: ${compras.congelados}\n - Doces: ${compras.doces}`)
}