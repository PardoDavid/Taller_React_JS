import logob from "./Hotelia horizontal blanco.svg";
import "./barra_lateral.css"
function Barra_lateral(){
    return(
    <div class="feature3 feature-blue3">            
                <img className="logo" src={logob} alt="Logo Hotelia"/>                
                <p id="frase">Eres más que bienvenido</p>
                </div>
    );
}
export default Barra_lateral;