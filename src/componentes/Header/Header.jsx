import React from "react";
import Logo from "../Header/pastelaria.png"

function Header(){
    return(
        

        <header>
        <nav>

        <img src={Logo} alt="" />
        <ul>
            <li>Cardápio</li>
            <li>Lojas</li>
            <li>Sobre</li>
            <li>Contatos</li>
            <li>Delivery</li>
        </ul>

        </nav>
        </header>

        
    )
}
export default Header