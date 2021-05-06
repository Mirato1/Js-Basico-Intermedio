let lucas = {
  nombre: "Lucas",
  apellido: "Giménez",
  edad: 20,
  challenger: true,
  peso: 48,
}
let riquelme = {
  nombre: "Gerardo",
  apellido: "Giménez",
  edad: 15,
  challenger: false,
  peso: 60
}

const MAYORIA_DE_EDAD = 18

let esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirNombre (persona){
 var nombre = persona.nombre.toUpperCase()
  var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombre(lucas)
imprimirNombre(riquelme)

function cumple(persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
}

function miProfesion(persona){
  if (persona.challenge){
    console.log(`${persona.nombre} es Challenger`);
  }
  else {
    console.log(`${persona.nombre} no es Challenger`);
  }
}

function mayorDeEdad(persona){
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`);
  }
  else {
    let añosFaltantes = MAYORIA_DE_EDAD - persona.edad
    console.log(`${persona.nombre} te faltan ${añosFaltantes} años para ser mayor`);
  }
}
const aumentarDePeso = (persona) => persona.peso += 0.2
const adelgazar = (persona) => persona.peso -= 0.2
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = lucas.peso - 3

let dias = 0

for (var i = 1; i < 365; i++) {
  let random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(lucas)
  }
  else if (random < 0.5) {
    adelgazar(lucas)
  }
}

console.log(`Al final del año ${lucas.nombre} pesa ${lucas.peso.toFixed(1)}kg`);

while (lucas.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(lucas)
  }
  if (realizaDeporte()) {
    adelgazar(lucas)
  }
  dias += 1
}
console.log(`Pasaron ${dias} días hasta que ${lucas.nombre} adelgazó 3kg`);


//*************************************************************************************//
const signo = prompt('¿Cual es tu signo?')

const horoscopos = [
  '21 marzo - 19 abril',
  '20 abril - 20 mayo',
  '21 mayo - 20 junio',
  '21 junio - 22 julio',
  '23 julio - 22 agosto',
  '23 agosto - 22 septiembre',
  '23 septiembre - 22 octubre',
  '23 octubre - 21 noviembre',
  '22 noviembre - 21 diciembre',
  '22 diciember - 19 enero',
  '20 enero - 18 febrero',
  '19 febrero - 20 marzo'
]
let signoLimpio = signo
	.toLowerCase()
	.trim()
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g,"")


  switch (signoLimpio) {
    case 'aries':
      console.log(horoscopos[0])
      break
    case 'tauro':
      console.log(horoscopos[1])
      break
    case 'geminis':
      console.log(horoscopos[2])
      break
    case 'cancer':
      console.log(horoscopos[3])
      break
    case 'leo':
      console.log(horoscopos[4])
      break
    case 'virgo':
      console.log(horoscopos[5])
      break
    case 'libra':
      console.log(horoscopos[6])
      break
    case 'escorpio':
      console.log(horoscopos[7])
      break
    case 'sagitario':
      console.log(horoscopos[8])
      break
    case 'capricornio':
      console.log(horoscopos[9])
      break
    case 'acuario':
      console.log(horoscopos[10])
      break
    case 'piscis':
      console.log(horoscopos[11])
      break
    default:
      console.log('Ese signo no existe')
      break
  }

//*******************************************************//

let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

let dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura < 1.8
const pasarAlturaCms = ({ altura }) => altura *= 100

let personas = [sacha, alan, martin, dario, vicky, paula]

let personasCms = personas.map(pasarAlturaCms)
let personasAltas = personas.filter(esAlta)
let personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)
console.log(personasCms)

for (var i = 0; i < personas.length; i++) {
  let persona = personas[i]
  console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura}mts`);
}
