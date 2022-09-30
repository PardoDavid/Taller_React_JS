import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import logo from "./Captura.JPG";
import fondo from "./azul.PNG";
import persona from "./joelvalve-JFE0vXN95o4-unsplash.jpg";
import "./nav.css"
import "https://kit.fontawesome.com/6131ecdde6.js";
function Nav(){
    return (
        <ul>
<div className="imagen">
        <img src={fondo}/>
        </div>
        <i className="fa-solid fa-bed"></i>
        <li><a href="">Habitaciones</a></li>
        <i className="fa-solid fa-bed"></i>
        <li><a href="">Registrar Habitaciones</a></li>
        <i className="fa-solid fa-pencil"></i>
        <li><a href="">Editar Perfil</a></li>
        <div className="logo">
            <img src={logo}/>
            </div>
            <div className="im4">
                <img src={persona} />
            </div>
   
        <div className="cerrar">
            <i className="fa-solid fa-arrow-right-from-bracket"><Link to="/Index">Home</Link></i>
           
            </div>
        <div className="corot">
            <h2>Angie Vargas</h2>
            <p>angievargas2@gmail.com</p>
        </div>
      
    </ul>
    );
}

export default Nav;
 