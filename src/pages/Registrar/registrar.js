import React from "react";
import "./registrar.css"
import Barra from "../../components/Registrar/barra_lateral/barra_laterar";
import Caja from "../../components/Registrar/caja_blanca/caja_blanca";
function Registrar(){
    return(
        <section  class="fondoreg">           
       <Barra/>
       <Caja/>
       </section>
    );
}
export default Registrar;
