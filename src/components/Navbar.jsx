import { NavLink } from "react-router-dom"
function Navbar(){
    return(
    
          <nav className="Navbar">
            <NavLink to="/">HomePage</NavLink>
            <Navbar to ="/addRecipe">Add Recipe</Navbar>
        </nav>
        
    )
}
export default Navbar