let contador = 10
let contador_tabuada = 10

for(let tabuada = 1; tabuada < contador_tabuada; tabuada++) {
    for(let index = 0; index < contador; index++) {
        let resultado = tabuada * index
        console.log(`${tabuada} * ${index} = ${resultado}`)
    }

    console.log(`------------------`)
}