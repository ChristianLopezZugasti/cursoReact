import { Gifitem } from "./Gifitem"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const Gifgrid = ({category}) => {
    
   const { images,isLoading } = useFetchGifs( category)


   
    return (
        <>
            <h3>{category} </h3>
        
            {
                isLoading && (<h2    >Cargando... </h2>)
                
            }
            <div className="card-grid" >
                {
                    images.map((image) => 
                        (
                            <Gifitem key={image.id} 
                            {...image} />
                            

                        )
                            
                    )
                }
            </div>
        </>
    )
}