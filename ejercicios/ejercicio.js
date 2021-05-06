class Persona{
  constructor(nombre, apellido, altura){

  	this.nombre = nombre
  	this.apellido = apellido
  	this.altura = altura
  }
  saludar(fn){
    let {nombre, apellido} = this
    console.log(`Hola me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido)
    }
  }
  soyAlto(){
    let {nombre, apellido, altura} = this
    	altura >= 1.8 ? console.log(`${nombre} mide ${altura} es alto`) : console.log(`${nombre} mide ${altura} es bajo/a`)
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(fn){
    let {nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah, no sabía que eras desarrollador/a`);
  }
}
//
// function persona(nombre, apellido, altura){
// 	this.nombre = nombre
// 	this.apellido = apellido
// 	this.altura = altura
// }
//
// persona.prototype.soyAlto = function (){
// 	this.altura > 1.8 ? console.log(`${this.nombre} mide ${this.altura} es alto`) : console.log(`${this.nombre} mide ${this.altura} es bajo`)
// }
//
// persona.prototype.saludar = function (){
// 	console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
// }

let cesar = new Persona('Cesar', 'Lopez', 1.77)
let juan = new Persona ('Juan', 'Obando', 1.81)
let lucas = new Desarrollador ('Lucas', 'Giménez', 1.74)
let yamyy = new Desarrollador ('Yamyy', 'Mouri', 1.50)

cesar.saludar()
cesar.soyAlto()

juan.saludar(responderSaludo)
juan.soyAlto()

lucas.saludar(responderSaludo)
lucas.soyAlto()

yamyy.saludar(responderSaludo)
yamyy.soyAlto()
