import { Navigate, useNavigate, useParams } from "react-router"
import { getHeroById } from "../helpers/getHeroeById";
import { heroes } from "../data/heroes";
import React, { useMemo } from "react";

export const HeroPage = () => {
 
    const {id} = useParams();  //es para extraer el param, pero no querys
    

    //cuando el id cambiem se va a volver a disparar la funcion .
    const hero = useMemo( ()=> getHeroById(id), [id])
 

    const navigate = useNavigate()


    const onNavigateBack = () => {
        //se puede haceer una condicion mas elabroada
        navigate(-1) //esto regresa al punto anterior
    }

    if(!hero) {
        return <Navigate to='/marvel' />
    }

    return (
        
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`/assets/heroes/${id}.jpg`} 
                    alt={hero.superhero} 
                    className="img-thumbnail animate__animated animate__fadeInLeft"  />

            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego}    </li>
                    <li className="list-group-item"> <b>Publisher: </b> {hero.publisher}    </li>
                    <li className="list-group-item"> <b>First Appearance: </b> {hero.first_appearance}    </li>
                    
                </ul>

                <h5 className="mt-3"> Characters:</h5>
                <p> { hero.characters}</p>

                <button className="btn btn-outline-primary"
                onClick={ onNavigateBack}>
                    regresar

                </button>
            </div>

        </div>
         
          
    
    )
}
