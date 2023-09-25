import React from "react";
import Tarjeta from "./tarjeta";

const Lista=({ruta})=>(
    <div>
    {ruta.map((info)=>{//sustituimos por las props
     return(
        <Tarjeta 
            key={ruta.id}
            nombre={info.nombre}//traemos el array 
            precio={info.precio}
            descripcion={info.descripcion}/>
     )   
    })}
    </div> 
)

export default Lista