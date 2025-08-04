import { Link, NavLink } from "react-router"

export const NavBar = () => {
  return (
    

<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">UseContext</Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink 
        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}` }// permite saber en que ruta estamos
        to="/" >
            Home
        </NavLink>

        <NavLink 
        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}` } // permite saber en que ruta estamos
        to="/About" >
            About
        </NavLink>

        <NavLink 
        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}` }// permite saber en que ruta estamos
        to="/Login" >
            Login
        </NavLink>

        

        
      </div>
    </div>
  </div>
</nav>



    // <Link to="/"> Home       </Link>
    // <Link to="login"> About  </Link>
    // <Link to="about"> Login  </Link>
    
  )
}
