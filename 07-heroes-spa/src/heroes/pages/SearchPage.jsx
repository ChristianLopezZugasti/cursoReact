import { useLocation, useNavigate } from "react-router"
import { useForm } from "../../../hook/useForm"
import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers/getHeroesByName"

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation(); //para poder leer el query

  //con esta madre, podemos leer facilmente el query, 
  const {q = ''} = queryString.parse(location.search)


  const heroes = getHeroesByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0 ) && heroes.length === 0 ;

  const {searchText,onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event)=> {
      event.preventDefault()
     // if(!searchText.trim() ) return

    //de esta forma, quiere decir que es la misma ruta
      navigate(`?q=${searchText.toLowerCase()}`);
    }

  return (
    <>
        <h1> Searchpage </h1>

        <hr/>
        <div className="row">
            <div className="col-5">
            <h4>searching</h4>
            <hr/>

            <form  onSubmit={onSearchSubmit}>

              <input
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              
              />

              <button className="btn btn-outline-primary mt-1">
                Search
              </button>
            </form>

        </div>

        <div className="col-7">
              <h4> Results </h4>
              <hr/>

            {/* {
              (q==='')
              ?
            (<div className="alert alert-primary">Search a hero</div>  )
              : (heroes.length === 0 ) 
              && <div className="alert alert-danger"> No hero with <b>{(q==='') ? 'no query' : q} </b></div>

            } */}
            
            <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>Search a hero</div>  

            <div className="alert alert-danger" style={({display: showError ? '' : 'none' })}> No hero with <b>{(q==='') ? 'no query' : q} </b></div>
            

            
            {
              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} /> 
              ))
            }

        </div>

        </div>
        
    </>
    )
}
