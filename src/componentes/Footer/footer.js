import man from "./man.png";
import fondo from "./azul.PNG";
import "./Fotter.css"
import "https://kit.fontawesome.com/6131ecdde6.js";
function Footer(){
    return(
       
        <footer class="pie-pagina1">
        <div class="grupo-2">
            <div id="van">
                <h2 class="pri">NUESTROS CLIENTES DICEN... </h2>
                <div class="van2">
                    <div class="color3">
                        <div class="im5">
                            <img  src={man} />
                        </div>
                        <div class="nom">
                            <strong>Diego rodriguez</strong>
                        </div>
                        <img src={fondo}/>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                     </div>
                    
                    <div>
                        <p>lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua</p>
                    </div>
                    </div>  
                    </div>  
                    <div class="color4">
                        <div class="im5">
                        <img  src={man} />
                        </div>
                        <div class="nom1">
                            <strong>Diego rodriguez</strong>
                        </div>
                        <img src={fondo}/>
                        
                        <div class="stars1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                     </div>
                    
                    <div>
                        <p>lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua</p>
                    </div>
                    </div>   
                    </div>
                    <div class="color5">
                        <div class="im5">
                        <img  src={man} />
                        </div>
                        <div class="nom1">
                            <strong>Diego rodriguez</strong>
                        </div>
                        <img src={fondo}/>
                        
                        <div class="stars1">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                     </div>
                    
                    <div>
                        <p>lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua</p>
                    </div>
                    </div>   
                    </div>
    </footer>
   

    );
}

export default Footer;