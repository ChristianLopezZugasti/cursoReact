import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Gifgrid } from "./components/GifGrid";

const apiKey = 'gzTJvfnEbH7y4mpsJZW4mOSuKeqtbRHS';

const peticion  = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)


export const GifExpertApp = () => {
  
   const [categories,setCategories] =  useState(['One punch']);


   //Evitar usar push,slice, modifican directamente el estado anterior, en este caso  creamos
   //un nuevo array, con lo que ya teniamos en el anterior
   //setCategories( c => c.push('hjola mundo') )   
   
   
   //EMITIR EVENTOS, desde el hijo. se manda como  prop la funcion 
   //que va a lanzar el hijo, con los parametros en caso de tener
   //y ya en el padre, dentro de la funcion, se hace lo que se quiere cuando se emite ese evento
   const onAddCategory = (NewCategory ) => {
    
    if(categories.includes(NewCategory) ) return;
    

    setCategories( [...categories,NewCategory]  )
      //setCategories( cat => [...cat,'new Categorie']  ) //en caso de no tener
   }
  
  return (
    <>
      <h1>GifExpertApp</h1>
      <hr/>
      <AddCategory  
      //setCategories={setCategories} 
      onNewCategory={onAddCategory} 
       />    

      {
          categories.map((category) => 
             <Gifgrid key={category} 
             category={category} />) 
      }
      

    </>
  );
}