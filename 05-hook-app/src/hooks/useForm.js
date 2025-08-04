import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  

    const [formState, setformState] = useState(initialForm)
    
    
        const onInputChange = ({target}) => { //el target, es el evento que se manda 
            const {name,value} = target
            setformState({
                ...formState,
                [name ] : value   //es una prpiedad computada, 
            })        
        }
    
        const onResetForm = () => {
            
            setformState(initialForm)        
        }
        

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }


}
