import CardFeature from "./Card-feature";
import "./Feature.css";
function Feature(){
    return(
        <section id="feature">
            
            <h2>Razones por las que disfrutarás quedarte con nosotros</h2>
            <div className="feature-row">
                <CardFeature
                texto='Reservas'
                background={true}
                icono='fa-solid fa-bell-concierge'/>
                <CardFeature
                texto='Habitaciones'
                background={false}
                icono='fa-solid fa-bed'/>
                <CardFeature
                texto='Wi-Fi'
                background={true}
                icono='fa-solid fa-wifi'/>
                <CardFeature
                texto='Gimnasio'
                background={false}
                icono='fa-solid fa-dumbbell'/>
            </div>

        </section>
    );
}

export default Feature;