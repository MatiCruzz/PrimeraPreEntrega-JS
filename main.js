function notas(nota1, nota2, nota3){
    const sumaDeNotas = nota1 + nota2 + nota3
    const notaFinal = sumaDeNotas / 3
    
    if(notaFinal >= 6){
        alert( notaFinal+'------Felicitaciones👌💯')
    }
    else{
        alert( notaFinal+'-----A seguir Estudiando💔🤷‍♀️')
    }
}

alert('Conozca su nota promedio')
const nota1 = parseFloat (prompt("Ingrese su primera nota"))
const nota2 = parseFloat (prompt("Ingrese su segunda nota"))
const nota3 = parseFloat (prompt("Ingrese su tercera nota"))

notas (nota1, nota2, nota3)