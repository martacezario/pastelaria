import React, {useState}from "react";
import Pastel from "./pastel.png";
import Caldo from "./caldo.png"
import Coca from "./coca.png"
import Carrinho from "./carrinho.png"
import Carrinho2 from "../../assets/carrinho2.png"
import Lixeira from "./lixeira.png"

export default function Main(){

    //criar const
    //criar uma array para guardar as duas coisas
    //receber o = hook useState ()
    //dentro do () colocar o valor inicial (0) ("Karynne") ("zebra") ("azul")

    const [numero, setNumero] = useState (0)
    const [numero2, setNumero2] = useState(0)
    const [numero3, setNumero3] = useState(0)

   

    const AdicionarCardUm = () => {
      if (numero < 10){
        setNumero(numero + 1)
      }
    }

    function RemoverCardUm(){
        if(numero > 0){
            setNumero(numero -1)
        }
    }

    function LimparCardUm(){
        setNumero (0)
    }

    const AdicionarCardDois = () => {
        if (numero2 < 10)
        setNumero2(numero2 + 1)
    }

    function RemoverCardDois(){
        if (numero2 > 0){
            setNumero2(numero2 - 1)
        }
    }

    function LimparCardDois(){
        setNumero2(0)

    }

    const AdicionarCardTres = () => {
        if(numero3 < 15){
            setNumero3(numero3 + 1)
        }
    }

    function RemoverCardTres(){
        if(numero3 > 0){
            setNumero3(numero3 - 1)
        }
    }
    function LimparCardTres(){
        setNumero3(0)
    }

    return(
        <main>
            <section>
                <img className="galeriaMain" src={Pastel} alt="imagem de um pastel" />
                <h3>R$10,00</h3>
                <img onClick={AdicionarCardUm} src={Carrinho} alt="" />
                <h2>{numero} itens</h2>
                <button onClick={RemoverCardUm}> - </button>
                <img onClick={LimparCardUm}src={Lixeira} alt="" />

            </section>

            <section>
                <img className="galeriaMain" src={Caldo} alt="imagem de caldo de cano"/>
                <h3>R$7,00</h3>
                <button onClick={AdicionarCardDois}>  <img src={Carrinho2} alt="" /> Carrinho </button>
                <h2>{numero2}</h2>
                <button onClick={RemoverCardDois}> - </button>
                <button onClick={LimparCardDois}> Limpar </button>
            </section>

            <section>
                <img className="galeriaMain" src={Coca} alt="imagem de uma garrafa de coca cola" />
                <h3>R$6,00</h3>
                <button onClick={AdicionarCardTres}> Carrinho </button>
                <h2>{numero3}</h2>
                <button onClick={RemoverCardTres}> - </button>
                <button onClick={LimparCardTres}> Limpar </button>
            </section>





        </main>
    )
}