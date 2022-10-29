import logov from "./Hotelia-negro-vertical.svg";
import "./Descripcion.css"
function Descripcion(){
    return(
        <section id="descripcion">
            <div className="text-descripcion">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolores accusantium accusamus temporibus recusandae animi odio sequi odit dolor repellendus, iste qui voluptatem enim nesciunt sed cum cupiditate, a veniam!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolores accusantium accusamus temporibus recusandae animi odio sequi odit dolor repellendus, iste qui voluptatem enim nesciunt sed cum cupiditate, a veniam!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolores accusantium accusamus temporibus recusandae animi odio sequi odit dolor repellendus, iste qui voluptatem enim nesciunt sed cum cupiditate, a veniam!
            </div>
            <div className="img-descripcion">
                <img src={logov} alt="Logo Hotelia"/>
            </div>
        </section>
    );
}

export default Descripcion;