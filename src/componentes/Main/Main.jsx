import React from "react";
import Pastel from "./pastel.png";
import Caldo from "./caldo.png"
import Coca from "./coca.png"

export default function Main(){
    return(
        <main>
            <section>
                <img className="galeriaMain" src={Pastel} alt="imagem de um pastel" />
                <h3>R$10,00</h3>
                <button>Carrinho</button>

            </section>
            <section>
                <img className="galeriaMain" src={Caldo} alt="imagem de caldo de cano"/>
                <h3>R$7,00</h3>
                <button>Carrinho</button>

            </section>
            <section>
                <img className="galeriaMain" src={Coca} alt="imagem de uma garrafa de coca cola" />
                <h3>R$6,00</h3>
                <button>Carrinho</button>

            </section>





        </main>
    )
}