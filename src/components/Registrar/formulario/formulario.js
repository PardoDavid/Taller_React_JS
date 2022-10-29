import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router";
import Swal from 'sweetalert2'
import {       
    Link
  } from "react-router-dom";
import "./formulario.css"

function Formulario(props){

      
    const history=useNavigate();
    
    const [data,setData]=useState({_id:"",tipodoc:"",nombre:"",apellido:"",
    fnacimiento:"",genero:"",email:"",telefono:"",paisorigen:"",password:"",tipouser:"",img:""});
    
    const handleChange=({target})=>{
    
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    const url="https://hoteliakuepa.herokuapp.com/users";  

        const handleSubmit=async(e)=>{
            e.preventDefault();
            const response=await axios.post(url,data);
            if (response.status === 201) {
                
                Swal.fire(
                    'Guardado!',
                    `El estudiante <strong> ${response.data.nombre} ${response.data.apellido}</strong> ha sido guardado exitosamente!`,
                    'success'
                )
                history.push("/");
                
            }else {
                Swal.fire(
                    'Error!',
                    'Hubo un problema al registrar el estudiante!',
                    'error'
                )
            }
        }


    return(
        
        <form onSubmit={handleSubmit}>
        <div className="form-row mb-2">
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.td}</label><br/>
                <select className="form-control" name="tipodoc"  onChange={handleChange} placeholder="Escoja una opción">
                    <option value="CC">CC</option>
                    <option value="TI">TI</option>
                    <option value="Otro">Otro</option>
                  </select>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.nd}</label>
                <input type="number" className="form-control" name="_id" value={data._id} onChange={handleChange}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.nom}</label>
                <input type="text" className="form-control" name="nombre" value={data.nombre} onChange={handleChange}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.ape}</label>
                <input type="text" className="form-control" name="apellido" value={data.apellido} onChange={handleChange}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.fn}</label>
                <input type="date" className="form-control" name="fnacimiento" value={data.fnacimiento} onChange={handleChange}></input>
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
            <input type="email" class="form-control" name="email" value={data.email} onChange={handleChange}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.tel}</label>
                <input type="number" className="form-control" name="telefono" value={data.telefono} onChange={handleChange}/>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.pais}</label><br/>
                <select className="form-control" name="paisorigen"  onChange={handleChange} placeholder="Escoja una opción">
                    <option value="Colombia">Colombia</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Otro">Chile</option>
                </select>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.foto}</label>
                <input type="file" className="form-control" name="img" value={data.img} onChange={handleChange}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Tipo Usuario</label>
                <input type="text" className="form-control" name="tipouser" value={data.tipouser} onChange={handleChange}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.con}</label>
                <input type="password" className="form-control" name="password" value={data.password} onChange={handleChange}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">{props.con}</label>
                <input type="password" className="form-control" name="clave" value={data.clave} onChange={handleChange}></input>
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
           <button className="butreg">Registrar</button>
            </div>
    </form>    
    );
}
export default Formulario;