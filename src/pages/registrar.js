import axios from 'axios';
import { useEffect, useState } from 'react';

function Listar() {
    const url="https://hoteliakuepa.herokuapp.com/users";

    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }
    const [list,setList]=useState([]);

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
            console.log(response.data);
        })
    },[])
    return (
       <div> 
<h2>Listado de personas</h2>

<table>
  <tr>
  <th>id</th>
    <th>tipodoc</th>
    <th>nombre</th>
    <th>apellido</th>
    <th>fnacimiento</th>
    <th>genero</th>
    <th>email</th>
    <th>telefono</th>
    <th>paisorigen</th>
    <th>password</th>
    <th>tipouser</th>
    <th>img</th>
  </tr>
  {list.map((list, index) => (
                        <tr>
                            <td className="td-users">{list._id}</td>
                            <td className="td-users">{list.tipodoc}</td>
                            <td className="td-users">{list.nombre}</td>
                            <td className="td-users">{list.apellido}</td>
                            <td className="td-users">{list.fnacimiento}</td>
                            <td className="td-users">{list.genero}</td>
                            <td className="td-users">{list.email}</td>
                            <td className="td-users">{list.telefono}</td>
                            <td className="td-users">{list.paisorigen}</td>
                            <td className="td-users">{list.password}</td>
                            <td className="td-users">{list.tipouser}</td>
                            <td className="td-users">{list.img}</td>
                            </tr>
                    ))}
</table>
</div>
    );
}
export default Listar;