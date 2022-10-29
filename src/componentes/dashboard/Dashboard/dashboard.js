import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import persona from "./joelvalve-JFE0vXN95o4-unsplash.jpg";
import simbolo from "./simbolo.PNG";

import "./dashboard.css"
import "https://kit.fontawesome.com/6131ecdde6.js";
function Dashboard(){

    const url="https://hoteliakuepa.herokuapp.com/users";
    
    /*1. Función asíncrona para realizar la petición*/ 
      const getData=async()=>{
          const response=axios.get(url);
          return response;
      }
  
      /*3. useState para guardar la respuesta de la petición en un estado y poderla usar en un componente */
      const [list,setList]=useState([]);
  
      /*4. agregamos otra constante al useState para actualizar el listado después de eliminar */
      const [upList,setUplist]=useState([false]);
  
      /*5. agregamos otra constante al useState para actualizar el estado del modal */
      const [show,setShow]=useState(false);
  
      const handleClose=()=>{setShow(false);}
      const handleOpen=()=>{setShow(true);}
  
      /*6. Estado para obtener los datos de cada registro a editar*/
      const [dataModal, setDataModal] = useState({})
      
  
      const handleChangeModal=({target})=>{
          setDataModal({
              ...dataModal,
              [target.name]: target.value
          })
      }
  
      const handleSubmit=async(e)=>{
          e.preventDefault();
          const response=await axios.put(`${url}/${dataModal._id}`,dataModal);
          //console.log(response);  
          if(response.status===200){
              Swal.fire(
                  'Cambio Guardado!',
                  `El estudiante <strong> ${response.data._nombre} ${response.data._apellido}</strong> ha sido actualizado exitosamente!`,
                  'success'
              )
              handleClose();
              setUplist(!upList);
          }
          else{
              Swal.fire(
                  'Error!',
                  'Hubo un problema al actualizar el estudiante!',
                  'error'
              )
          }
      }
      /*2. useEffect para ejecutar funciones desde el inicio del renderizado*/ 
      useEffect(()=>{
          getData().then((response)=>{
              setList(response.data);
          })
      },[upList])//Se actualiza el listado cada vez que cambie el estado up List
  
  
      //console.log(list);

      
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
            <input className="input" type="email" placeholder="Nombres" required name="nombre" value={dataModal.nombre} onChange={handleChangeModal}></input>
            
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