import './App.css';
import Pantalla from './componentes/input';
import logoCalculadora from './imagenes/calculadora.png'
import Boton from './componentes/botones'
import BotonClear from './componentes/BotonClear';
import { useState } from 'react'
import { evaluate } from 'mathjs'

 function App() {

  const [input, setInput]= useState('')

  const agregarImput = value =>{
    setInput(input + value)
  }

  const calcularResultado =()=>{

  if (input) {
    setInput(evaluate(input))
  }else{
    alert('porfavor ingrese valores para ejecutar accion')
  }

 
  }

  return (
    <div className='App'>
     <div className='logo-contenedor'>
      <img 
      src={logoCalculadora}
      className='logo-calculadora'
      alt='logo de calculadora'
      />
     </div>
     <div
     className='contenedor-calculadora'>
      <Pantalla 
      input={input}
      />
       <div className='fila'>
        <Boton manejasClicks = {agregarImput}>1</Boton>
        <Boton manejasClicks = {agregarImput}>2</Boton>
        <Boton manejasClicks = {agregarImput}>3</Boton>
        <Boton manejasClicks = {agregarImput}>+</Boton>
       </div>
       <div className='fila'>
       <Boton manejasClicks = {agregarImput}>4</Boton>
        <Boton manejasClicks = {agregarImput}>5</Boton>
        <Boton manejasClicks = {agregarImput}>6</Boton>
        <Boton manejasClicks = {agregarImput}>-</Boton>
       </div>
       <div className='fila'>
       <Boton manejasClicks = {agregarImput}>7</Boton>
        <Boton manejasClicks = {agregarImput}>8</Boton>
        <Boton manejasClicks = {agregarImput}>9</Boton>
        <Boton manejasClicks = {agregarImput}>*</Boton>
       </div>
       <div className='fila'>
       <Boton manejasClicks = {agregarImput}>.</Boton>
        <Boton manejasClicks = {agregarImput}>0</Boton>
        <Boton manejasClicks = {calcularResultado}>=</Boton>
        <Boton manejasClicks = {agregarImput}>/</Boton>
       </div>
       <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')}>
            clear
          </BotonClear>
       </div>
     </div>
    </div>
  );
}

export default App;
