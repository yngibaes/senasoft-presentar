import React from "react";
import { Link } from "react-router-dom";
import "./styles/entrada.css"

class Entrada extends React.Component{
    render(){
        return(
        <div className="body">
            <div className="container">
                <div className="button">
                    <Link to="/login" className="linkbutton">
                        <button>Iniciar sesión</button>
                    </Link>
                    <Link to="/signup" className="linkbutton">
                        <button>Registrarse</button>
                    </Link>
                </div>
            </div>
        </div>    
    )}
}
export default Entrada