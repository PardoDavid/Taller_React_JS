import { Card } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import "./edit.css"



function CardHuesped({users,setUplist,upList,handleClose,handleOpen,setDataModal}){

    /*1. Crear petición asíncrona*/
    const url="https://hoteliakuepa.herokuapp.com/users"; 

    

    /*3. Función para editar un registro*/
    const handleEdit=()=>{
        handleOpen();
        setDataModal(users);
    }
    return(  
        <div>
        <div>
        <div className="col-4 mb-3" id="hola">
        <Card style={{ width: '18rem' }}>            
            <Card.Body>
                <Card.Title className="text-center">{users.nombre} {users.apellido}</Card.Title>
                <Card.Text>
                <strong>Tipo Documento: </strong>{users.tipodoc}<br/>
                <strong>No. Documento: </strong>{users._id}<br/>                
                </Card.Text>
                <button className="btn btn-warning me-2" onClick={handleEdit}>Editar</button>                
            </Card.Body>
            
        </Card>
        </div>
        </div>
        </div>    
     
    );
}

export default CardHuesped;