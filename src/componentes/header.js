import React from "react";
import "./styles/inicio.css"

class Header extends React.Component{
    render(){
        return(
        <div class="inicio-ws">
            <div class="headerws">
                <img id="imghd" src="css/whitewings_jm.jpg" alt="Jimin"/>
                <nav class="inicio-ws">
                    <ul>
                        <li>
                            <a href="bsinicio.html">Black Swan</a>
                        </li>
                        <li>
                            <a href="wsmeandjustme.html">Me and just me</a>
                        </li>
                        <li>
                            <a href="wsbts.html">BTS</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        )
    }
}

export default Header