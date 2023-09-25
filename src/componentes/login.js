import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles/login.css"

class LogIn extends React.Component{
   state={
      email: '',
      password: '',
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
      const add = ()=>{
         const data = {
            email: this.state.email,
            password: this.state.password,
          };
          axios.post("http://localhost:3001/login", data)
         .then(()=>{
            alert("Iniciaste sesión");
         })
       }
        return (
         <div className="container">
            <h1 className="tittle">Iniciar sesión</h1>
             <div className="content">
                <form onSubmit={this.enviar}>
                <div className="user-details">
                     <div className="input-box">
                        <label>Email:
                        <input placeholder="mateomonito@gmail.com" type="email" name="email" required
                        onChange={this.cambios} value={this.state.email}/></label>
                     </div>
                     <div className="input-box">
                        <label>Contraseña:
                        <input placeholder="xxxxxxxx" type="password" name="password" required onChange={this.cambios} value={this.state.password}/></label>
                     </div>
                     <div className="button">
                        <Link to="/inicio" className="linkbutton">
                           <button onClick={add}>Iniciar sesión</button>
                        </Link>
                     </div>
                  </div>
                </form>
             </div>
         </div>
    )}
};
export default LogIn