import logov from "./Hotelia horizontal negro.svg";
import "./login.css"
function login(){
    return(
        <section id="fondologin">
            <div class="feature2 feature-blue2">          
            <img src={logov} alt="Logo Hotelia"/>
            <form id="loginform">
            <div class="loguito">
                    <i class="fa-solid fa-user"></i>
                </div>
            <label id="usuario" for="usuario">Usuario</label>
            <input id="campou" type="text" name="usuario"  required/>            
            <label id="clave" for="password">Contraseña</label><br/>
            <input id="campop" type="password" name="password" required></input>            
            <a href="registro.html"><button  class="but">Ingresar</button></a>         
            <p id="cuenta">¿No tienes cuenta? <a href="registro.js" class="reg">Regístrate aquí</a>   </p>
            </form>
            </div>                        
        </section>
    );
}

export default login;