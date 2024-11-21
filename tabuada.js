var contador = 10;
var contador_tabuada = 10;
for (var tabuada = 1; tabuada < contador_tabuada; tabuada++) {
    for (var index = 0; index < contador; index++) {
        var resultado = tabuada * index;
        console.log("".concat(tabuada, " * ").concat(index, " = ").concat(resultado));
    }
    console.log("------------------");
}
