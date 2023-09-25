import React from "react";
import "./styles/tarjeta.css"

class Tarjeta extends React.Component{
    render(){
        const{nombre, precio, descripcion}=this.props;
        return(
            <div id="showTrendSection">

            <div class="container">

                <div class="productOrden">
                    <img src="media/img/nature.jfif" alt="Producto"/>
                    <img src={nombre} alt="ola"/>
                    <span>{precio}</span>
                    <p>{descripcion}</p>
                </div>

            </div>

        </div>

        )
    }
}

export default Tarjeta