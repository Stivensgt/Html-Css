import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <ul class="navbar">
            <li>
                <img src="/media/9d916a7e65a33b6ed2c88d6cdb32ca38.ico" alt="imagen" class="logo"  />
            </li>
            <li>
                <button class="button mainButton" >Nuevo post</button>
            </li>
            <li>
                <div class="buscar">
                <input placeholder="Buscar una raza" type="text"/>
                  
                <i class="fas fa-search button iconoBusqueda"></i>
                </div>
            </li>
           
            <li><button class="button secondaryButton">Login</button></li>
            <li><button class="mainButton">Registro</button></li>
        </ul>

    </header>
    <main>
        <section>
            <h1>Razas de perros</h1>
            <ul class="breedCardContainer ">
                <li class="breedCard">
                    <div class="contenedorImagen ">
                    <img src="/media/border-collie.jpg" alt="Border collie"/>
                    </div>
                    
                    <span class="breedTitle">
                        Border collie
                    </span>
                    
                    
                </li>
                <li class="breedCard">
                    <div class="contenedorImagen">
                    <img src="/media/9d916a7e65a33b6ed2c88d6cdb32ca38.jpg" alt="Rhodesiam"/>
                    </div>
                    <span class="breedTitle">Rhodesiam</span>
                    
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
