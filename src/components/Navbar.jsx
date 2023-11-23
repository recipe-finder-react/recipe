import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <img className="logo" src={Logo} />
      </NavLink>
    </nav>
  );
}
export default Navbar;
