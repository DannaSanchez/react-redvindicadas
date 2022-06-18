import "./Header.css"
import logo from "../logo.svg"
function Header () {
    return (
        <header>
            <img src={logo}></img>
            <h1>Redvindicadas</h1>
        </header>
    )
}
export default Header