import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from './componentes/login';
import Signup from "./componentes/signup";
import Entrada from './componentes/entrada';
import Inicio from './pages/inicio';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="/inicio" Component={Inicio}/>
                <Route exact path="/login" Component={LogIn}/>
                <Route exact path="/signup" Component={Signup}/>
                <Route path="" Component={Entrada}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
