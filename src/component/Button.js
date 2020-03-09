import React from 'react';

class Button extends React.Component{
    render() {
        const propiedades = this.props;
        if(propiedades.tipoAccion === "Iniciar" || propiedades.tipoAccion === "Pausar") {
            return (<button onClick = {propiedades.IniciarCronometro}>{propiedades.tituloBoton}</button>)
        } else {
            return(<button onClick = {propiedades.ReestablecerCronometro}>{propiedades.tituloBoton}</button>)
        }
    }
}

export default Button;