const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman'
};

//const {nombre, edad, clave} = persona
//Se puede poner valores por defecto
const Context = ( {nombre,edad,rango= 'Capitan' ,clave}) => {

  console.log(nombre,edad,rango)

  return {
    nombreClave: clave,
    anios: edad,
    latlng : {
      lat: 14.3232,
      lng: -12.2342
    }

  }
}
// se puede desesctrucar lo que retorna una funcion, en caso de ser un objeto
const {nombreClave,anios,latlng: {lat,lng }} = Context(persona)

console.log(nombreClave,anios)
console.log(lat,lng)