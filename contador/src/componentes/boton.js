import React from "react";
import "../style/boton.css";
function Boton({ texto, esBonDeClick, manejarClick }) {
    return(
      <button className={ esBonDeClick ? "boton-click" : "boton-reiniciar" }
      onClick={manejarClick}>
        {texto}
      </button>
    )
}

export default Boton;