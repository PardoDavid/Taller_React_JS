import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  
import Nav from '../../componentes/dashboard/nav/nav';
import Dashboard from '../../componentes/dashboard/Dashboard/dashboard';

function Dash(){
    return(
        <section>
        <Nav/>
        <Dashboard/>
        </section>
    );
}
export default Dash;