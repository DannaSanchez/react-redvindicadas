import "../components/error404/Error404.css"
import logo from "../components/logo.svg"
import {Link} from "react-router-dom"
function Error404(){
    return(
        <div className='initial-screen'>
            <main className="initial-main">
                <section className="initial-logo">
                    <img src={logo} alt='Logo Redvindicadas' />
                    <h1>Redvindicadas</h1>
                </section>
                <p className="pink-title initial-title">¡Nosotras<span className="white-title initial-title"> hacemos </span> el cambio!</p>
                <button className="initial-button"><Link to='/' className='item'>Ingresar</Link></button>
            </main>
        </div>
    );
}
export default Error404