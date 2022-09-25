import "./formulario.css"

function formulario(){
    return(
        
        <form class="formreg">            
        <div class="form-row mb-2">
            <div class="form-group col-md-6">
                <label class="font-weight-bold">Tipo de Documento </label><br/>
                <select class="form-control" name="tipodoc"  placeholder="Escoja una opción">
                    <option value="cc">CC</option>
                    <option value="ti">TI</option>
                    <option value="otro">Otro</option>
                  </select>
            </div>
            <div class="form-group col-md-6">
                <label class="font-weight-bold">Número de Documento</label>
                <input type="number" class="form-control"></input>
            </div>
            <div class="form-group col-md-6">
                <label class="font-weight-bold">Nombres </label>
                <input type="text" class="form-control"></input>
            </div>
            <div class="form-group col-md-6">
                <label class="font-weight-bold">Apellidos</label>
                <input type="text" class="form-control"></input>
            </div>
            <div class="form-group col-md-6">
                <label class="font-weight-bold">Fecha Nacimiento</label>
                <input type="date" class="form-control"></input>
            </div>
            <div class="form-group col-md-6">
                <label class="font-weight-bold">Género</label><br/>
                <label class="font-weight-bold">Hombre</label>
                <input type="radio" name="genero" value="1"></input>
                <label class="font-weight-bold">Mujer</label>
                <input type="radio" name="genero" value="2"></input>
                <label class="font-weight-bold">Otro</label>
                <input type="radio" name="genero" value="3"></input>
            </div>
            <div class="form-group col-md-6">
            <label class="font-weight-bold">Email</label>
            <input type="email" class="form-control"></input>
            </div>
            <div class="form-group col-md-6">
                <label class="font-weight-bold">Teléfono de Contacto</label>
                <input type="number" class="form-control"/>
            </div>
            <div class="form-group col-md-6">
                <label class="font-weight-bold">País de origen </label><br/>
                <select class="form-control" name="pais" placeholder="Escoja una opción">
                    <option value="cc">Colombia</option>
                    <option value="ti">Venezuela</option>
                    <option value="otro">Chile</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label class="font-weight-bold">Foto</label>
                <input type="file" class="form-control"></input>
            </div>
            <div class="form-group col-md-6">
                <label class="font-weight-bold">Contraseña</label>
                <input type="password" class="form-control"></input>
            </div>
            <div class="form-group col-md-6">
                <label class="font-weight-bold">Confirmar Contraseña</label>
                <input type="password" class="form-control"></input>
            </div>
            </div>
                            
            <div class="form-group mb-5">
            <div class="check">
             <input class="checkbox" type="checkbox" data-toggle="modal" data-target="#Terminos"></input>                    
                <label class="acepto">Acepto Terminos y Condiciones</label>
            </div>
        </div>
        <div class="modal fade" id="Terminos" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Terminos y Condiciones</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
          </button>
             </div>
            <div class="modal-body">
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
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
            </div>
        </div>
        <div class="botonreg">   
            <a href="dashboard.html"><button class="butreg">Ingresar</button></a>                        
    </div>
    </form>
    );
}
export default formulario;