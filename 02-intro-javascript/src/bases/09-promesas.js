import { getHeroeById , getHeroeByOwner} from '../data/heroes'

// const promesa = new Promise( (resolve,reject) => {
  
//   setTimeout( ()=> {
    
//     const heroe = getHeroeById(2)
//    // console.log(heroe)
    
    
//    // resolve(heroe)
//     reject('No se pudp encontrar el heroe')
//   },100)
// })


// //then la promesa se resolvio correctamente
// //catch 
// //finally se ejecuta despues del then y del catch

// //se recibe otro callback, y este se ejecuta cuando se llama al resolve
// promesa.then((heroe)=>{ //este nombre puede ser diferente
//   console.log('herore',heroe)
// })
// .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {
    return  new Promise( (resolve,reject) => {
  
  setTimeout( ()=> {
    
    const heroe = getHeroeById(id )
   // console.log(heroe)
    
    if(heroe)resolve(heroe)
   reject('No se pudp encontrar el heroe')
  },100)
})
}
getHeroeByIdAsync(10)
.then(heroe => console.log('heore',heroe))
.catch(err => console.log(err))

