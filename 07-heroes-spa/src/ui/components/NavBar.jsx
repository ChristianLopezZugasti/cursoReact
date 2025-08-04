import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const {user,logout} = useContext(AuthContext)

    console.log(user)
    const navigate = useNavigate();  //esto es un customHook, de react router

    const onLogout = () => {
        logout()
        navigate('/login',{
            replace: true   //remplaza el historial, e impide que se pueda regresar
        }) //to: la ruta a la que quiero navegar
        
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse p-2">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}` } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}` } // permite saber en que ruta estamos
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}` } // permite saber en que ruta estamos
                        to="/search"
                    >
                        search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item navlink text-primary mt-2 '>
                            {user?.name}
                    </span>
                    <button className='nav-item nav-link btn '
                    onClick={onLogout} >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}