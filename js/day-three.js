const area = prompt(`1 - Front-End \n2 - Back-End`)
let front = `- Front-End`,
    back = `- Back-End`
    
if(area == 1) {
    let frame = prompt(`1 - React \n2 - Vue`)
    if(frame == 1) {
        frame = ` \nReact`
        front += frame
        alert(front)
    } else {
        frame = ` \nVue`
        front += frame
        alert(front)
    }

} else {
    let frame = prompt(`1 - C# \n2 - Java`)
    if(frame == 1) {
        frame = ` \nC#`
        back += frame
        alert(back)
    } else {
        frame = ` \nJava`
        back += frame
        alert(back)
    }
}

let msg = prompt(`Quer aprender mais alguma tecnologia? \ns - Sim \nn - Não`),
    saida = `Você vai aprender:\n`

while (msg === "s"){
    let tec = prompt(`Qual tecnologia?`)

    msg = prompt(`Quer aprender mais alguma tecnologia? \ns - Sim \nn - Não`)
    
    saida += `\n${tec}`
}
alert(saida)