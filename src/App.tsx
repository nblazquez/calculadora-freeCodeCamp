import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import logo from './imagenes/FreeCodeCamp_logo.png'
import { useState } from 'react';
import { evaluate, index } from 'mathjs';
import Logo from './componentes/Logo';

function App() {

  const [input, setInput] = useState('');
  const [ultimoInput, setUltimoInput] = useState('');

  const agregarInput = (val:string) => {
    //Controlar que el primer valor no es un operando
    if(esOperador(val) && !input){
      alert("Introduce un valor válido");
    }
    //Sustituir último operando por el nuevo
    else if(esOperador(val) && esOperador(ultimoInput)){
      setInput(input.substring(0, input.length-1) + val);
      setUltimoInput(val);
    }
    else{
      setInput(input + val);
      setUltimoInput(val);
    }
  };

  const calcularResultado = () => {
    let valor:string = input.toString().charAt(index.length-1);
    if (input){
      if(esOperador(valor)){
        setInput(evaluate(input.substring(0, input.length-1)))
      }else{
        setInput(evaluate(input));
      }
    } else {
      alert("Introduce valores para realizar los cálculos");
    }
  };

  const esOperador = (valor: any) => {
    return isNaN(valor) && (valor !== '.' && (valor !== '='));
  };

  return (
    <div className="App">
      <Logo />
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
};

export default App;
