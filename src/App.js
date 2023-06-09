import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/propiedades";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un componente desde una function Declarada" />
          <hr />
          <Propiedades
            cadena={"Esto es una cadena de texto"}
            numero={19}
            boolean ={true}
            arreglo = {[2, 4, 6]}
            objeto = {{"nombre": "Natalia", "apellido": "Hilarion"}}
            funcion = {(numero)=> numero * numero}
            elementoReact = {<strong>Esto es un elemento React</strong>}
            componenteReact = {Componente.msg = "Soy un componente pasado como props"}
          />
        </section>
      </header>
    </div>
  );
}

export default App;
