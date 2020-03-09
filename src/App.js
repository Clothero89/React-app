import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './component/Button'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      segundos : 0,
      minutos : 0,
      horas : 0,
      iniciado : false,
      interval : null
    }
  }

  IniciarCronometro = () =>{
    var interval = this.state.interval;

    if (!this.state.iniciado) {
      interval = setInterval(this.aumentarTiempo, 1000);

      this.setState({
        iniciado : !this.state.iniciado,
        interval : interval
      });
    } else {
      clearInterval(interval);
      this.setState({
        iniciado : !this.state.iniciado,
      });
    }
  }

  ReestablecerCronometro = () => {
    this.setState ({
      segundos : 0,
      minutos : 0,
      segundos : 0,
      iniciado : false,
      interval : null
    });
  }

  aumentarTiempo = () => {
    const segundosActuales = this.state.segundos;
    if(segundosActuales != 59) {
      this.setState(
        {segundos : this.state.segundos + 1}
      );
    } else {
      const minutosActuales = this.state.minutos;
      if(minutosActuales != 59) {
        this.setState(
          {segundos : 0, minutos : this.state.minutos + 1}
        );
      } else {
        const horasActuales = this.state.horas;
        if(horasActuales != 23) {
          this.setState(
            {segundos : 0, minutos : 0, horas : this.state.horas + 1}
          );
        } else {
          this.setState(
            {segundos : 0, minutos : 0, horas : 0}
          );
        }
      }
    }
  }

  render() {
    const horas = this.state.horas;
    const minutos = this.state.minutos;
    const segundos = this.state.segundos;
    
    return (
      <div className="App">
        <div className = "Crono">
          <p>
            {horas} : {minutos} : {segundos}
          </p>

          <Button tipoAccion = "Iniciar" tituloBoton = "Iniciar" IniciarCronometro = {this.IniciarCronometro} />
          <Button tipoAccion = "Pausar" tituloBoton = "Pausar" IniciarCronometro = {this.IniciarCronometro} />
          <Button tipoAccion = "Detener" tituloBoton = "Detener" ReestablecerCronometro = {this.ReestablecerCronometro} />
        </div>
      </div>
    );
  }
}
  

export default App;
