import './App.css';
import milanLogo from './img/milan.png'
import Boton from './component/botones.js'
import Contador from './component/contador';
import { useState } from 'react';

function App() {

  const  [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  } 

  const reiniciarContador = () => {
    setNumClics(0); 
  }

  return (
    <div className="App">
      <div className='milan-logo-container'>
        <img className='milan-logo' 
        src= {milanLogo}
        alt='logo de milan' />
      </div>
      <div className='container-principal'>
        <Contador numClics = {numClics} />
        <Boton 
        texto='clic'
        esBotonDeClic= {true}
        manejarClic = {manejarClic} />
        <Boton
        texto ='reiniciar'
        esBotonDeClic = {false}
        manejarClic = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
