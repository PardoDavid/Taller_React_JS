import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import CardEstudiante from './editcard';

function ListHuesped(){

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
    return(
        
       <Container>
           <Row>
            {
                list.map((est,index)=>(
                    //<p>{est.nombre}</p> Esta información se iprime como un card

                    <CardEstudiante 
                    key={index}
                    users={est}
                    setUplist={setUplist}
                    upList={upList}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    setDataModal={setDataModal}
                    />
             
                ))
            }
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Huesped</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                <Form.Group className="mb-3">
            <Form.Label>Tipo de Documento</Form.Label>
            <Form.Select 
            name="tipodoc"
            onChange={handleChangeModal}>
                <option>Seleccione un Tipo de Documento</option>
                <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                <option value="Cédula de extranjería">Cédula de extranjería</option>
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>No. Documento</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Ingrese su número de documento"
                name="_id" 
                value={dataModal._id}
                onChange={handleChangeModal}/> 
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese su nombre"
                name="nombre" 
                value={dataModal.nombre}
                onChange={handleChangeModal}/> 
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese su apellido"
                name="apellido" 
                value={dataModal.apellido}
                onChange={handleChangeModal}/> 
            </Form.Group>   

            <Form.Group className="mb-3">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control 
                type="date" 
                placeholder="Fehca"
                name="fnacimiento" 
                value={dataModal.fnacimiento}
                onChange={handleChangeModal}/> 
            </Form.Group>  

             <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Email"
                name="email" 
                value={dataModal.email}
                onChange={handleChangeModal}/> 
            </Form.Group> 

            <Form.Group className="mb-3">
                <Form.Label>No. Telefono</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Ingrese su número de telefono"
                name="telefono" 
                value={dataModal.telefono}
                onChange={handleChangeModal}/> 
            </Form.Group>

             <Form.Group className="mb-3">
            <Form.Label>Tipo de Documento</Form.Label>
            <Form.Select 
            name="paisorigen"
            onChange={handleChangeModal}>
                <option>Seleccione el País de Origen</option>
                <option value="Colombia">Colombia</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Otro">Otro</option>
            </Form.Select>
            </Form.Group>           

        
            <Form.Group className="mb-3">
                <Form.Label>Foto</Form.Label>
                <Form.Control 
                type="file" 
                placeholder="Ingrese la URL de la imagen"
                name="img" 
                value={dataModal.img}
                onChange={handleChangeModal}/> 
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Ingrese su contraseña"
                name="password" 
                value={dataModal.password}
                onChange={handleChangeModal}/> 
            </Form.Group>   

            <Form.Group className="mb-3">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Ingrese su contraseña"
                name="clave1" 
                value={dataModal.clave}
                onChange={handleChangeModal}/> 
            </Form.Group>   
            <Form.Group className="mb-3">
                <Form.Label>Tipo Usuario</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese su contraseña"
                name="tipousuario" 
                value={dataModal.tipousuario}
                onChange={handleChangeModal}/> 
            </Form.Group>   
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button className="btn btn-primary" type="submit">
                       Guardar Cambios
                    </button>
                </Modal.Footer>
                </Form>
            </Modal>
       </Container>
    );
}
export default ListHuesped;