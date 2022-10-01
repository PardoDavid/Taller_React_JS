import Formulario from "../formulario/formulario";
import "./caja_blanca.css"    

function Caja_blanca(){    

    return(
       
        <div className="feature4 feature-white4">             
        <p id="ti">Regístrate</p><br/> 
        <Formulario
        td="Tipo de Documento"
        nd="Número de Documento"
        nom="Nombres"
        ape="Apellidos"
        fn="Fecha de Nacimiento" 
        gen="Género"
        email="Email"
        tel="Teléfono de Contacto"
        pais="País de Origen"
        foto="Foto"
        con="Contraseña"
        ter="Acepto Términos y Condiciones"/>
        </div>
        
    );
}
export default Caja_blanca;