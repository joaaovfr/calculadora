function calcular(tipo, valor) {

    if (tipo === 'acao') {

        if (valor === 'c') {
            //limpar o visor do resultado
            document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            // EVAL - avalia o expressão de cadeia de caracteres e retorna seu valor
            let valor_campo = eval(document.getElementById('resultado').value)

            document.getElementById('resultado').value = valor_campo
        }

    } else if (tipo === 'valor') {

        document.getElementById('resultado').value += valor
    }

} n