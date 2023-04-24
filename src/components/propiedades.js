import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.boolean ? "Es verdadero" : "No es verdadero"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.apellido}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Por defecto Las Props",
};

// Las propTypes restringen por defecto a un elemento primitivo. PropTypes.number solo recibe tipo number
// isRequired para que sea requerido
Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
  cadena: PropTypes.string,
  boolean: PropTypes.bool,
  arreglo: PropTypes.array,
  objeto: PropTypes.object,
  funcion: PropTypes.func,
};
