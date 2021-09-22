import logo from './logo.svg';
import './styles/App.css';
import bordercollie from './media/border-collie.jpg';
import rhodesiam from './media/rhodesiam.jpg'
import favicon from './media/favicon.ico'

function App() {
  return (
    <div className="App">
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
    <main>
        <section>
            <h1>Razas de perros</h1>
            <ul className="breedCardContainer ">
                <li className="breedCard">
                    <div className="contenedorImagen ">
                    <img src={bordercollie} alt="Border collie"/>
                    </div>
                    
                    <span className="breedTitle">
                        Border collie
                    </span>
                    
                    
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                    <img src={rhodesiam} alt="Rhodesiam"/>
                    </div>
                    <span className="breedTitle">Rhodesiam</span>
                    
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}


export default App;
