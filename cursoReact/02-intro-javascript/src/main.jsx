

const activo = true;

//const mensaje = activo ? 'activo' : 'inactivo'
//Si solo quiero ejecutar  el caso de true
//si la condicion se cumple, se ejecuta lo que esta despues
//del ampersand, en caso de que no se cumple, se retorna
//un false 
const mensaje = activo && 'activo'

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word,index,array) => word.length > 6);

console.log(result);


console.log(mensaje)