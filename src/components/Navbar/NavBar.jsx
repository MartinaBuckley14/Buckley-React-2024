import React from 'react'
import "./navbar.scss" 
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid conteiner-nav">
            <Link to="/" className="navbar-brand" >
                <img src="/logo.png" alt="logo" classNameName='logo'/>
                <p className='brand'>FT Lures Argentina</p>
            </Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="menu collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item" aria-current="page"><Link to="/" className="nav-link">Inicio</Link></li>
                    <li className="nav-item"><Link to="/contacto/contacto" className="nav-link" aria-disabled="true">Contacto</Link></li>
                    <li className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nuestros Señuelos
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/category/sinking" className="dropdown-item">Sinking</Link></li>
                            <li><Link to="/category/semi-sinking" className="dropdown-item">Semi-sinking</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    </nav>
    )
}

export default NavBar
