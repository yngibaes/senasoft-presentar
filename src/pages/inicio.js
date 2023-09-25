import React from "react";
import Lista from "../componentes/lista";
class Inicio extends React.Component{
    state={
            data:[{
                id:1,
                nombre:"https://concepto.de/wp-content/uploads/2018/10/bosque2-e1539893598295.jpg",
                precio:"15 pesos",
                descripcion:"Carne con pan"
            },{
                id:2,
                nombre:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR809Jyikc89jPkRNNmRQKuQmA-6ne07BrFC7Eu11SiLj5X5l-J7gVX3w9h1AItUaL_8ww&usqp=CAU",
                precio:"13 pesos",
                descripcion:"Salchicha con pan"
            }
            ]
        
        }
        render(){
            return(//traemos el saludo que es fijo
                <div>
        <Lista
        ruta={this.state.data}
        />
        </div>)}}

export default Inicio