import { NavLink } from "react-router-dom"
import './navbar.css'
function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
          <h1>LUXURY</h1>
          <h5>HOTELS</h5>
        </div>
        <div className="collection">
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"/facilities"} >Facilities</NavLink>
          <NavLink to={"/rooms"} >Rooms</NavLink>
          <NavLink to={"/contact"} >Contact-us</NavLink>
        </div>
    </div>
  )
}

export default Navbar