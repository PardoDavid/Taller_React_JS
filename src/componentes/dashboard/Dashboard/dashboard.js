import persona from "./joelvalve-JFE0vXN95o4-unsplash.jpg";
import simbolo from "./simbolo.PNG";

import "./dashboard.css"
import "https://kit.fontawesome.com/6131ecdde6.js";
function Dashboard(){
    return (
        <div className="container">
       
        <div className="form__top">
           
            <h2>Bienvenido, Angie Vargas</h2>

        </div>
        <div className="im">
            <img src={persona} alt=""/>
        </div>
        <br/>
        <div className="im2">
            <img src={simbolo} alt=""/>
        </div>

        <input className="btn__reset2" type="reset" value="Cambiar"></input>
        <br/>
        <br/>

        <form className="form__reg" action="">
            Tipo de Documento
            <input className="input" type="text" required autofocus></input>
            Nombres
            <input className="input" type="email" placeholder="Nombres" required></input>
            Fecha de Nacimiento
            <input className="input" type="date" required></input>
            Genero
            <br/>
            <br/>
            <div>
                <input type="radio" id="" name="contact" value="email"></input>
                <label for="contactChoice1">Mujer</label>
             
                <input type="radio" id="" name="contact" value="phone"></input>
                <label for="contactChoice2">Hombre</label>
             
                <input type="radio" id="" name="contact" value="mail"></input>
                <label for="contactChoice3">otro</label>
            </div>
   <br></br>
            Email
            <input className="input" type="email" placeholder="" required></input>

            <input className="btn__reset1" type="reset" ></input>
  
<br/>Contraseña
            <input className="input" type="text" required></input>

    </form>
        
        <form className="form__reg2" action="">
            Numero de Documento
            <input className="input" type="text" required autofocus></input>
            Apellidos
            <input className="input" type="email" placeholder="Nombres" required></input>
            Pais de Origen
            <input className="input" type="email" placeholder="Nombres" required></input>
            
            Telefono de Contacto
            <input className="input" type="email" placeholder="" required></input>
            <br/>
            Foto
            <input className="input" type="email" placeholder="Seleccionar Archivo" required></input>
            <br/>
            <br/>
            <br/>
      
            Confirmar Contraseña
            <input className="input" type="text" required></input>
<br/>
<br/>
<br/>


                <input className="btn__reset" type="reset" value="Actualizar"></input>
       
        </form>

    </div>
    
    );
}
export default Dashboard;