import "./Footer.css"
import logo from "../logo.svg"
import tech from "./tech_power.png"
function Footer () {
    return(
        <footer>
            <div className="foot-email">
                <img src={logo} alt="logo"/>
                <h1>Redvindicadas</h1>
                <p>redvindicadas@gmail.com</p>
                </div>
            <div class="foot-developers">
                <h3>Diseño por devs de Kuepa</h3>
                <ul class="foot-developers-list">
                    <div class="list-section">
                        <li>Daniela Tarazona @</li>
                        <li>Danna Sanchez @</li>
                    </div>
                    <div class="list-section">
                        <li>Lizeth Rico @</li>
                        <li>Viviana Murillo @</li>
                    </div>
                </ul>
            </div>
            <div class="foot-tech-power">
                <h3>Tech Power</h3>
                <h3>Creando tu futuro</h3>
                <img src={tech}/>
            </div>
        </footer>
    );
}
export default Footer