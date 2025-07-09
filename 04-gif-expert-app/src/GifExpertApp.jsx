import { useState } from "react";

const apiKey = 'gzTJvfnEbH7y4mpsJZW4mOSuKeqtbRHS';

const peticion  = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)


export const GifExpertApp = () => {
  
   const [categories,setCategories] =  useState(['One punch','Dragon Ball','Naruto']);
  
  

  return (
    <>
      <h1>GifExpertApp</h1>
      <ol>
          {categories.map(category => {
            return <li key={category } > {category} </li>
          } ) }
      </ol>

    </>
  );
}