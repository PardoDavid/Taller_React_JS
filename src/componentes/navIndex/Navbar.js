import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Hotelia from "./Hotelia horizontal blanco.svg"
import "./Navbar.css"
function Navbar(){
    
    return(
       
        <section>
        <nav>
        <div className="logo3">
            <img src={Hotelia}/>
            <i className="fa-solid fa-bars hamburguer"></i>
        </div>

        <div className="menu outside">
            <a href="index.html" className="item">Inicio</a>
            <a href="ubicanos.html" className="item">Ubícanos</a>
            <a href="/edit" className="item">Consultar</a>
            <hr className="menu-hr" noshade=""></hr>
            <Link to="/login">
           <button className="navbar-button"><i className="fa-solid fa-user"></i> Iniciar
                    Sesión</button></Link>

        </div>
    </nav>
    </section>
    );
}

export default Navbar;
