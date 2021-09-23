
import favicon from 'media/favicon.ico'

const Header = () => {
    return (
        <header>
            <ul className="navbar">
                <li>
                    <img src={favicon} alt="imagen" className="logo"  />
                </li>
                <li>
                    <button className="button mainButton" >Nuevo post</button>
                </li>
                <li>
                    <div className="buscar">
                    <input placeholder="Buscar una raza" type="text"/>
                    
                    <i className="fas fa-search button iconoBusqueda"></i>
                    </div>
                </li>
            
                <li><button className="button secondaryButton">Login</button></li>
                <li><button className="mainButton">Registro</button></li>
            </ul>
        </header>
    
    )
}

export default Header;