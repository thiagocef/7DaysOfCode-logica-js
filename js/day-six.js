let compras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
}

let ask = prompt('Deseja adicionar uma comida?\n S - Sim\n N - Não\n R - Remover item')
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

    ask = prompt('O que deseja fazer?\n S - Adicionar mais item\n N - Concluir\n R - Remover Item')

    cont ++

} 
//remover itens
if (ask === 'r' || ask === 'R') {

    if(compras.frutas.length === 0 && compras.laticinios.length === 0 && compras.congelados.length === 0 && compras.doces.length === 0) {
        alert(`Sua lista de compras está vazia`)
        // :\n - Frutas: ${compras.frutas}\n - Laticínios: ${compras.laticinios}\n - Congelados: ${compras.congelados}\n - Doces: ${compras.doces}
    }

    ask = prompt(`Qual item deseja remover?\nSua lista de compras:\n- Frutas: ${compras.frutas}\n- Laticínios: ${compras.laticinios}\n- Congelados: ${compras.congelados}\n- Doces: ${compras.doces}`)

    if(compras.frutas.includes(ask)) {
        compras.frutas.pop(ask)
        alert(`Item ${ask} removido`)

    } else if (compras.laticinios.includes(ask)) {
        compras.laticinios.pop(ask)
        alert(`Item ${ask} removido`)

    } else if (compras.congelados.includes(ask)) {
        compras.congelados.pop(ask)
        alert(`Item ${ask} removido`)

    } else if(compras.doces.includes(ask)) {
        compras.doces.pop(ask)
        alert(`Item ${ask} removido`)
    
    }
     else {
        alert('Item não consta na lista')
    }
    
}

if(compras.frutas.length === 0 && compras.laticinios.length === 0 && compras.congelados.length === 0 && compras.doces.length === 0) {
    alert(`Sua lista de compras está vazia:\n - Frutas: ${compras.frutas}\n - Laticínios: ${compras.laticinios}\n - Congelados: ${compras.congelados}\n - Doces: ${compras.doces}`)

} else {
    alert(`Sua lista de compras:\n - Frutas: ${compras.frutas}\n - Laticínios: ${compras.laticinios}\n - Congelados: ${compras.congelados}\n - Doces: ${compras.doces}`)
}