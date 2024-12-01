import React from 'react'
import "./navbar.scss" 
import CartWidget from './CartWidget'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid conteiner-nav">
            <div className="navbar-brand" href="#">
                <img src=".././src/assets/logo.png" alt="logo" classNameName='logo'/>
                <p className='brand'>FT Lures Argentina</p>
            </div>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="menu collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item" aria-current="page"><a className="nav-link" href="#">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link disabled" href="#" aria-disabled="true">Contacto</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nuestros Señuelos
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Teitei 60</a></li>
                            <li><a class="dropdown-item" href="#">Koinor</a></li>
                            <li><a class="dropdown-item" href="#">Bananita UL</a></li>
                            <li><a class="dropdown-item" href="#">Rufa 60</a></li>
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
