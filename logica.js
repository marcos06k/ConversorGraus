document.getElementById('form_valor').addEventListener('submit', function (e) {
    e.preventDefault()

    let inputValor = parseFloat(document.querySelector('#input_temperatura').value)
    let inputDe = document.querySelector('#de').value
    let inputPara = document.querySelector('#para').value
    let resultado = document.getElementById('resultado')
    console.log("teste 1 " + inputValor, inputDe, inputPara)

        // celsius 
        if(inputDe == 'celsiusDe' && inputPara == 'fahrenheitPara' || inputDe == 'celsiusDe' && inputPara == 'kelvinPara'){
            resultado.innerHTML = " <p>"+calcular(inputValor).toFixed(2)+"</p>"
        } else if (inputDe == 'celsiusDe' && inputPara == 'celsiusPara'){
            window.alert('Você selecionou escalas de temperaturas iguais')
            resultado.innerHTML = ""
        }

        // fahrenheit
        if(inputDe == 'fahrenheitDe' && inputPara == 'celsiusPara' || inputDe == 'fahrenheitDe' && inputPara == 'kelvinPara'){
            resultado.innerHTML = " <p>"+calcular(inputValor).toFixed(2)+"</p>"
        } else if (inputDe == 'fahrenheitDe' && inputPara == 'fahrenheitPara'){
            window.alert('Você selecionou escalas de temperaturas iguais')
            resultado.innerHTML = ""
        }

        // kelvin
        if(inputDe == 'kelvinDe' && inputPara == 'celsiusPara' || inputDe == 'kelvinDe' && inputPara == 'fahrenheitPara'){
            resultado.innerHTML = " <p>"+calcular(inputValor).toFixed(2)+"</p>"
        } else if (inputDe == 'kelvinDe' && inputPara == 'kelvinPara'){
            window.alert('Você selecionou escalas de temperaturas iguais')
            resultado.innerHTML = ""
        }



        function calcular(valorTemperatura) {
            //celsius
            if(inputDe == 'celsiusDe' && inputPara == 'fahrenheitPara') {
                return (valorTemperatura * 9/5) + 32
            } else if (inputDe == 'celsiusDe' && inputPara == 'kelvinPara') {
                return valorTemperatura + 273.15;
            }
            
            // fahrenheit
            if(inputDe == 'fahrenheitDe' && inputPara == 'celsiusPara') {
                return (valorTemperatura - 32) * 5/9;
            } else if (inputDe == 'fahrenheitDe' && inputPara == 'kelvinPara') {
                return (valorTemperatura - 32) * 5/9 + 273.15;
            }

            // kelvin 
            if(inputDe == 'kelvinDe' && inputPara == 'celsiusPara') {
                return valorTemperatura - 273.15;
            } else if (inputDe == 'kelvinDe' && inputPara == 'fahrenheitPara') {
                return (valorTemperatura - 273.15) * 9/5 + 32;
            }

        }
    
})