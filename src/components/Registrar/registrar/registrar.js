import BarraAzul from "../barra_lateral/barra_laterar";
import Caja from "../caja_blanca/caja_blanca";
import "./registrar.css"
import "../barra_lateral/barra_lateral.css"
import "../caja_blanca/caja_blanca.css"
function registrar(){
    return(
        <section class="fondoreg">
            <BarraAzul/>
            <Caja/>
        </section>
    );
}
export default registrar;

