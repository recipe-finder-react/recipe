import { NavLink } from "react-router-dom"
function Navbar(){
    return(
    
          <nav className="Navbar">
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/recipe/:id">Recipe</NavLink>
            
        </nav>
        
    )
}
export default Navbar