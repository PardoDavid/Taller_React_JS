import { propTypes } from "react-bootstrap/esm/Image";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "./formulario.css"

function formulario(props){
    return(
        
        <form className="formreg">            
        <div className="form-row mb-2">
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.td}</label><br/>
                <select className="form-control" name="tipodoc"  placeholder="Escoja una opción">
                    <option value="cc">CC</option>
                    <option value="ti">TI</option>
                    <option value="otro">Otro</option>
                  </select>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.nd}</label>
                <input type="number" className="form-control"></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.nom}</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.ape}</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.fn}</label>
                <input type="date" className="form-control"></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.gen}</label><br/>
                <label className="font-weight-bold">Hombre</label>
                <input type="radio" name="genero" value="1"></input>
                <label className="font-weight-bold">Mujer</label>
                <input type="radio" name="genero" value="2"></input>
                <label className="font-weight-bold">Otro</label>
                <input type="radio" name="genero" value="3"></input>
            </div>
            <div className="form-group col-md-6">
            <label className="font-weight-bold">{props.email}</label>
            <input type="email" class="form-control"></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.tel}</label>
                <input type="number" className="form-control"/>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.pais}</label><br/>
                <select className="form-control" name="pais" placeholder="Escoja una opción">
                    <option value="cc">Colombia</option>
                    <option value="ti">Venezuela</option>
                    <option value="otro">Chile</option>
                </select>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.foto}</label>
                <input type="file" className="form-control"></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.con}</label>
                <input type="password" className="form-control"></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.con}</label>
                <input type="password" className="form-control"></input>
            </div>
            </div>
                            
            <div className="form-group mb-5">
            <div className="check">
             <input className="checkbox" type="checkbox" data-toggle="modal" data-target="#Terminos"></input>                    
                <label className="acepto">{props.ter}</label>
            </div>
        </div>
        <div className="modal fade" id="Terminos" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Terminos y Condiciones</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
          </button>
             </div>
            <div className="modal-body">
            <p>Estos Terminos de Servicio reflejan la forma<br/>
                de trabajar de Google como empresa, las<br/>
                leyes por las que nos regimos y determinados<br/>
                aspectos que siempre hemos creído que son<br/>
                ciertos. Por ello, estos Términos de Servicio<br/>
                ayudan a definir la relación que tiene Google<br/>
                contigo cuando interactúas con nuestros<br/>
                servicios. Por ejemplo, estos términos<br/>
                incluyen las siguientes secciones:<br/><br/>
                Qué pueden esperar de nosotros, donde se<br/>
                describe cómo proporcionamos y<br/>
                desarrollamos nuestros servicios.<br/>
                Lo que esperamos de ti, donde se establecen<br/>
                ciertas reglas para utilizar nuestros servicios.</p>            
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
            </div>
        </div>
        <div className="botonreg">               
            <Link to="/login"><button className="butreg">Ingresar</button></Link>
    </div>
    </form>
    );
}
export default formulario;