const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function(data){
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError (id){
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

async function personajes(){
  let ids = [1, 2, 3, 4, 5, 6, 7]
  let promesas = ids.map(id => obtenerPersonaje(id))

  try {
      let personajitos = await Promise.all(promesas)
      console.log(personajitos)
  } catch (id) {
    onError(id)
  }
}

personajes()


// obtenerPersonaje(5)
//   .then(function (personaje){
//     console.log(`El personaje es ${personaje.name}`);
//   })
//   .catch(onError)


//
// const URL='https://swapi.dev/api/'
// const PEOPLE_URL='/people/:id'
//
// fetch(`${URL}${PEOPLE_URL.replace(':id',1)}`)
// .then((response)=>response.json())
// .then((persona)=>{
//     console.log(`Hola yo soy ${persona.name}`)
// })
// .catch( error=> console.error('Error: ', error))


// const API_URL = 'https://swapi.dev/api/'
// const PEOPLE_URL = 'people/:id'
//
// const opts = { crossDomain: true }
//
// const onPeopleResponse = function(persona){
//    console.log(`Hola yo soy, ${persona.name}`)
// }
//
// function obtenerPersonaje (id){
//    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
//    $.get(url, opts, onPeopleResponse)
// }
//
// for (var i =1; i <10; i++){
//    obtenerPersonaje(i)
// }





















/*

//const urlApi = 'https://swapi.dev/api/';
//const character = 'people/:id';
const urlApi = 'https://rickandmortyapi.com/api/character/'
const character = ':id';

function getData(id){
    //La promesa se debe definir antes de la estructura request de la funcion
    return new Promise(function(resolve, reject){
        var url = `${urlApi}${character.replace(':id',id)}`;
        //Defino un objeto que sirve para contener o recibir la informacion
        //del servidor
        var objRequest = new XMLHttpRequest;
        //Defino el tipo de request como get, la url del servidor y que sera
        //una comunicación asincrona = true
        objRequest.open('GET', url, true)
        //Hacer la petición al servidor, .onload es el callback cuando se hace
        //la petición request al servidor. Tambien podemos usar .onreadystatechange
        //objRequest.onreadystatechange = function(){
        objRequest.onload = function(){
            if(this.readyState == 4 && this.status == 200){
                //La información llega en un archivo JSON hay que cambiarlo a objeto
                //para trabajar con el de manera mas facil
                let personaje = JSON.parse(this.responseText)
                resolve(personaje)
            }else{
                reject(id)
            }
        }
        objRequest.send()

    })
}

function onError(id){
    console.log(`Ha ocurrido un error en el id ${id}`)
}

var ids = [1,2,3,4]
var promesas = ids.map((id) => getData(id))
Promise.all(promesas)
    .then(personaje => {
        //Para saludar cada personaje hagp un ciclo for
        for(var i = 0; i < promesas.length; i++){
            console.log(`Mi nombre es ${personaje[i].name}`)
        }
    }).catch(onError)
*/
