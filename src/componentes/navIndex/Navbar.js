import Hotelia from "./Hotelia horizontal blanco.svg"
import "./Navbar.css"
function Navbar(){
    
    return(
        <section>
        <nav>
        <div class="logo3">
            <img src={Hotelia}/>
            <i class="fa-solid fa-bars hamburguer"></i>
        </div>

        <div class="menu outside">
            <a href="index.html" class="item">Inicio</a>
            <a href="ubicanos.html" class="item">Ubícanos</a>
            <a href="opiniones.html" class="item">Opiniones</a>
            <hr class="menu-hr" noshade=""></hr>
            <a href="login.html" class="item"><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar
                    Sesión</button></a>
        </div>
    </nav>
    </section>
    );
}

export default Navbar;
