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
        <i class="fa-solid fa-bed"></i>
        <li><a  href="#home">Habitaciones</a></li>
        <i class="fa-solid fa-bed"></i>
        <li><a href="FormHabitacion.html">Registrar Habitaciones</a></li>
        <i class="fa-solid fa-pencil"></i>
        <li><a href="#news">Editar Perfil</a></li>
        <div class="logo">
            <img src={logo}/>
            </div>
            <div className="im4">
                <img src={persona} />
            </div>
   
        <div class="cerrar">
            <i class="fa-solid fa-arrow-right-from-bracket">  <a href="index.html">Cerrar Sesion</a></i>
           
            </div>
        <div class="corot">
            <h2>Angie Vargas</h2>
            <p>angievargas2@gmail.com</p>
        </div>
      
    </ul>
    );
}

export default Nav;
 