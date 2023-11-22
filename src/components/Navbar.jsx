import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <img className="logo"  src="./src/assets/Logo.png"/>
      </NavLink>
     
    </nav>
  );
}
export default Navbar;
