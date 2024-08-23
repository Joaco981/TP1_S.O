function TestCorrecto() {   /*Resultados correctos  */
    var PreguntasCorrectas = {
        q1: "a",
        q2: "c",
        q3: "c"
    };

    var Puntaje = 0;/*Contador  */
    var totalPuntaje = 3;/*Total puntaje  */

    for (var opciones in PreguntasCorrectas) {//for que opciones y preguntas correctas
        var seleccionarOpcion = document.querySelector('input[name="' + opciones + '"]:checked');//mal
        if (seleccionarOpcion && seleccionarOpcion.value === PreguntasCorrectas[opciones]) {//bien y se suma
            Puntaje++;
        }
    }

    var result = document.getElementById('resultado');//se guarda el result
    result.innerHTML = "<h2>Tu puntuación es: " + Puntaje + " de " + totalPuntaje + "</h2>";//imprime
}

