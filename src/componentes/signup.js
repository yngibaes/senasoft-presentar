import React from "react";
import "./styles/signup.css";
import axios from "axios";

class Signup extends React.Component{
   state={
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      tele: '',
      pais:''
    };
      cambios=e=>{
         this.setState({
            [e.target.name]:e.target.value
         })
      }
      enviar=e=>{
         e.preventDefault()
         console.log(this.state)
      }
      
    render (){
      const add = () => {
         const data = {
           nombre: this.state.nombre,
           apellido: this.state.apellido,
           email: this.state.email,
           password: this.state.password,
           tele: this.state.tele,
           pais: this.state.pais
         };
       
         axios.post("http://localhost:3001/signup", data)
           .then(() => {
             console.log("si mi socia, si me estoy enviando");
           })
           .catch((err) => {
             alert("error");
           });
       };
       
        return (
         <div className="body">
             <div className="container">
               <h1 className="tittle">Registrarse</h1>
                  <div className="content">
                     <form onSubmit={this.enviar}>
                        <div className="user-details">
                           <div className="input-box">
                              <label>Inserte su nombre:
                              <input placeholder="Ana" type="text" name="nombre" required
                                 onChange={this.cambios}
                                 value={this.state.nombre}/></label>
                           </div>
                           <div className="input-box">
                              <label>Inserte su apellido:
                              <input placeholder="Amaya" type="text" name="apellido" required
                                 onChange={this.cambios}
                                 value={this.state.apellido}/></label>
                           </div>
                           <div className="input-box">
                              <label>Inserte su email:
                              <input placeholder="mariasssa21@gmail.com" type="email" name="email" required
                                 onChange={this.cambios}
                                 value={this.state.email}/></label>
                           </div>
                           <div className="input-box">
                              <label>Inserte su contraseña:
                              <input placeholder="xxxxxxxx" type="password" name="password"  required
                                 onChange={this.cambios}
                                 value={this.state.password}/></label>
                           </div>
                           <div className="input-box">
                              <label>Inserte su télefono:
                              <input placeholder="312009083" type="text" name="tele" required
                                 onChange={this.cambios}
                                 value={this.state.tele}/></label>
                           </div>
                           <div className="input-box">
                              <label>Inserte su país:
                              <input placeholder="Colombia" type="text" name="pais" required
                                 onChange={this.cambios}
                                 value={this.state.pais}/></label>
                           </div>
                              <div className="button">
                                    <button onClick={add} className="linkbutton">Iniciar sesión</button>
                              </div>
                        </div>
                     </form>
                </div>
             </div>
         </div>
    )}
};
export default Signup