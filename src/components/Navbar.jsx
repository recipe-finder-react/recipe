import { NavLink } from "react-router-dom"
function Navbar(){
    return(
    
          <nav className="Navbar">
            <NavLink to="/"><em>HomePage</em></NavLink>
            <NavLink to ="/addRecipe">Add Recipe</NavLink>
        </nav>
        
    )
}
export default Navbar