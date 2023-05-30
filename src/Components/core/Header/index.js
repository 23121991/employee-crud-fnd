import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">SaS-Organisation</NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" to="/employee/add">CreateEmployee</NavLink>
          </div>
        </div>
      </div>
    </nav>
    </div>
    
  )
}
export default Header;