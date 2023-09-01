import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './navegacion.css'
import logo from '../../img/logo.png'
import * as Icon from 'react-icons/fa'
function Navegacion() {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const hadleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);


  return (
    <>
    <nav className='navegador'>
    <div className='logo'>
                <img src={logo} alt="imagen" className='logo-restaurant'/>

    </div>
    <div className='menu-icon' onClick={hadleClick}>
    {click ? <Icon.FaTimes/> : <Icon.FaBars/>} 
    </div>
    <div className='contendor'>
        <ul className='navMenu'>
          <li><NavLink className="link-menu" to="/">Home</NavLink></li>
          <li><NavLink className="link-menu" to="/conocenos">Conocenos</NavLink></li>
          <li><NavLink className="link-menu" to="/Menu">Menu</NavLink></li>
          <li><NavLink className="link-menu" to="/Reservas">Reservaciones</NavLink></li>
        </ul>
      </div>
    </nav>
       
    </>
  )
}

export default Navegacion