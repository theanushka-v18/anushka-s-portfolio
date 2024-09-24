import { NavLink } from "react-router-dom";
import avatarImg from "../assets/avatar.png";
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="avatar">
            <img src={avatarImg} alt="Avatar" />
        </div>
        <div className="nav-links">
            <ul>
                {/* <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">SKills & Certifications</a></li>
                <li><a href="#">Contact Me</a></li> */}

                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                </li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About Me</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Projects</NavLink></li>
                <li><NavLink to="/skills&certifications" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Skills & Certifications</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact Me</NavLink></li>
            </ul>
        </div>
        <div className="toggle-theme">
            <LightModeIcon />
        </div>
    </div>
  )
}

export default Navbar
