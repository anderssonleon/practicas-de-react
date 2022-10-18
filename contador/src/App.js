import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from './imagenes/descarga.png'
import { useState } from 'react';




function App() {
    

  const [numClicks,setNumClicks] = useState(0);


 const manejarClick = ()=>{
      setNumClicks(numClicks + 1);
 }

 const reiniciarContador = ()=>{
  setNumClicks(0);
 }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logoo' 
        />
      </div>
       <div className='contenedor-principal'>
        <Contador 
        numClicks={numClicks}
        />
           <Boton 
           texto='click'
           esBonDeClick={true}
           manejarClick={manejarClick}
           />
           <Boton
           texto='reiniciar' 
           esBonDeClick={false}
           manejarClick={reiniciarContador}
           />
       </div>

    </div>
  );
}

export default App;
