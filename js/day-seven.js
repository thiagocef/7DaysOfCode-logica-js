let op,
    cont = 0
    
while(op != 5) {
    if(op < 1 || op > 4) {
       alert('Opção Inválida!!')
       op = prompt('Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair')

    } else {
        op = prompt('Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair')
    }
    
    switch (op) {
        case '1':
            var n1 = Number(prompt('Primeiro Número')),
                n2 = Number(prompt('Segundo Número'))
                somar(n1, n2)
            break;
        case '2':
            n1 = Number(prompt('Primeiro Número'))
            n2 = Number(prompt('Segundo Número'))
            subtrair(n1, n2)
            break;
        case '3':
            n1 = Number(prompt('Primeiro Número'))
            n2 = Number(prompt('Segundo Número'))
            multiplicar(n1, n2)
            break;
        case '4':
            n1 = Number(prompt('Primeiro Número'))
            n2 = Number(prompt('Segundo Número'))
            dividir(n1, n2)
            break;
        default:
            break;
    }

    cont ++
}

function somar(n1, n2) {
    return alert(`Resultado: ${n1 + n2}`)
}

function subtrair(n1, n2) {
    return alert(`Resultado: ${n1 - n2}`)
}

function multiplicar(n1, n2) {
    return alert(`Resultado: ${n1 * n2}`)
}

function dividir(n1, n2) {
    return alert(`Resultado: ${n1 / n2}`)
}