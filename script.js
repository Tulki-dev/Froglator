let resultadoDisplay = ''
let result = document.getElementById("mostrarResultado")

function mostrarResultado(value) {

    switch (value) {
        case 'delete':
            resultadoDisplay = resultadoDisplay.slice(0, -1);
            break;

        case 'ce':
            console.log(value);
            resultadoDisplay = ''
            break;

        case 'result':
            resultadoDisplay = eval(resultadoDisplay).toFixed(2)
            break;

        default:
            resultadoDisplay += value
            break;
    }


    if (window.matchMedia("(min-width:800px)").matches) {
        if (!value || resultadoDisplay.length >= 13) return
    } else {
        if (!value || resultadoDisplay.length >= 8) return
    }

    let resultado = document.getElementById("result")
    resultado.innerText = resultadoDisplay
}
