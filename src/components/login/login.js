import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import logov from "./Hotelia horizontal negro.svg";
import "./login.css"
function login(props){
    return(
        <section id="fondologin">
            <div className="feature2 feature-blue2"> 
            
            <img src={props.hola} alt="Logo Hotelia"/>    
            <h1>{props.hola}</h1>                                               
            <form id="loginform">
            <div className="loguito">
                    <i className="fa-solid fa-user"></i>
                </div>
            <label id="usuario" for="usuario">Usuario</label>
            
            <input id="campou" type="text" name="usuario"  required/> 
                     
            <label id="clave" for="password">Contraseña</label><br/>
            <input id="campop" type="password" name="password" required></input>                        
            <Link to="/registrar"><button  className="but">Ingresar</button></Link>         
            <p id="cuenta">¿No tienes cuenta? <Link to="/registrar" className="reg">Regístrate aquí</Link>   </p>
            </form>
            </div>                        
        </section>



        
    );
}

export default login;