let compras = {
    frutas: ['banana', 'manga', 'maçã'],
    laticinios: ['leite', 'quejo'],
    congelados: ['carne'],
    doces: ['goiabada', 'doce de leite']
}

let remover = 'leite'

if(compras.congelados.includes(remover)) {
    compras.congelados.pop(remover)
    console.log(compras.congelados)
} else {
    console.log(compras.congelados)
}



