import man from "./man.png";
import fondo from "./azul.PNG";
import "./Fotter.css"
import "https://kit.fontawesome.com/6131ecdde6.js";
function Footer(){
    return(
       
        <footer className="pie-pagina1">
        <div className="grupo-2">
            <div id="van">
                <h2 className="pri">NUESTROS CLIENTES DICEN... </h2>
                <div className="van2">
                    <div className="color3">
                        <div className="im5">
                            <img  src={man} />
                        </div>
                        <div className="nom">
                            <strong>Diego rodriguez</strong>
                        </div>
                        <img src={fondo} />
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                     </div>
                    
                    <div>
                        <p>lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua</p>
                    </div>
                    </div>  
                    </div>  
                    <div className="color4">
                        <div className="im5">
                        <img  src={man} />
                        </div>
                        <div className="nom1">
                            <strong>Diego rodriguez</strong>
                        </div>
                        <img src={fondo}/>
                        
                        <div className="stars1">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                     </div>
                    
                    <div>
                        <p>lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua</p>
                    </div>
                    </div>   
                    </div>
                    <div className="color5">
                        <div className="im5">
                        <img  src={man} />
                        </div>
                        <div className="nom1">
                            <strong>Diego rodriguez</strong>
                        </div>
                        <img src={fondo}/>
                        
                        <div className="stars1">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
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