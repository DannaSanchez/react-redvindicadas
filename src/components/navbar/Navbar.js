import "./Navbar.css"
import {Link} from "react-router-dom"
function Navbar (){
    return(
        <nav>
            <input type="checkbox" name="check-menu" id="check-menu" />
            <label for="check-menu" class="button-menu">
                <i class="fa-solid fa-bars fa-2xl"/>
            </label>

            <ul class="nav-header"> 
                <li><Link to="home.html">Inicio</Link></li>
                <li><Link to="/">Juega y Aprende</Link></li>
                <li><Link to="/">Oportunidades</Link></li>
                <li class="redes">Redes de apoyo
                    <ul class="redes-enlaces">
                        <li><Link to="asociados.html">Asociados</Link></li>
                        <li><Link to="emergencias.html">Líneas de emergencia</Link></li>
                    </ul>
                </li>
                <li><Link to="kitfem/arengas.html">Kit Fem</Link></li>
            </ul>
        </nav> 
    );
}
export default Navbar