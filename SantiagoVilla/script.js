console.log ("Ejercicio 1")
let precio1 = parseFloat(prompt("Ingresa el precio del primer producto:"))
let precio2 = parseFloat(prompt("Ingresa el precio del segundo producto:"))
let precio3 = parseFloat(prompt("Ingresa el precio del tercer producto:"))
let total = precio1 + precio2 + precio3
console.log("El total a pagar es: " , total)
console.log("")



console.log("Ejercicio 2")
let ancho = parseFloat(prompt("Ingrese el ancho de la pared en metros: "))
let alto = parseFloat(prompt("Ingrese la altura de la pared en metros: "))
let area = ancho * alto
console.log("El area del producto es de " , area , "metros cuadrados") 
console.log("")



console.log("Ejercico 3")
let largo = parseFloat(prompt("Ingrese el largo del potrero en metros:"))
let ancho1 = parseFloat(prompt("Ingrese el ancho del potrero en metros:"))
let perimetro = 2 * (ancho + largo)
console.log("El perimetro del potrero es de " , perimetro , " metros")
console.log("")




console.log ("Ejercicio 4")
let tempF = parseFloat(prompt("Ingrese la temperatura en ºF: "))
let tempC = (tempF - 32) * 5 / 9
console.log ("La temperatura es de " , tempC , " grados celsius")
console.log ("")





console.log("Ejercicio 5")
let año = parseInt(prompt("Ingrese su año de nacimiento"))
let edad = (año - 2024) *-1
console.log("Usted tiene" , edad , " años")
console.log ("")



console.log ("Ejercicio 6")
prompt ("Buenos dias señor cliente")
let nombre = prompt("Ingrese su nombre: ")
let apellido = prompt ("Ingrese su apellido: ")
let nombreCompleto = nombre + " " + apellido
console.log("Bienvenido señor." , nombreCompleto)
console.log(" ")



console.log("Ejercicio 7")
let nota1 = parseFloat(prompt("Ingrese la primera nota"))
let nota2 = parseFloat(prompt("Ingrese la segunda nota"))
let nota3 = parseFloat(prompt("Ingrese la tercera nota"))
let prom = (nota1 + nota2 + nota3) /3
console.log ("El promedio de las notas es de:" , prom)
console.log(" ")


console.log("Ejercicio 8")
let cantHora = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en la semana"))
let valHora = parseFloat(prompt("Ingrese el valor de hora trabajada: "))
let salario = cantHora * valHora
console.log("El salario semanal es de: " , salario)