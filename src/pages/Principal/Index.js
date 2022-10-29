import Banner from '../../componentes/banner/Banner';
import Descripcion from '../../componentes/descripcion/Descripcion';
import Feature from '../../componentes/feature/Feature';
import Ubicacion from '../../componentes/Ubicacion/ubicacion';
import Footer from '../../componentes/Footer/footer';
import Footer2 from '../../componentes/Footer2/footer2';
import Navbar from '../../componentes/navIndex/Navbar';

function Principal() {
    return (
        <section>
            <Navbar />
            <Banner />
            <Descripcion />
            <Feature />
            <Ubicacion />
            <Footer />
            <Footer2 />
        </section>
    );
}
export default Principal;