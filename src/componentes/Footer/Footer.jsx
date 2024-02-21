import React, { useState } from "react"

function Footer (){
    const Mensagem = () => {
        setTimeout(() => {
            alert("Você recebeu 1 milhão")
        }, 1000)
    }


    //---Exemplo 2 com setTimeout

    const [numero, setNumero] = useState(0)

    const Add = () => {
        setTimeout(() => {
            setNumero(numero + 1)
        }, 2000)
    }

//--SETINTERVAL É UM MÉTODO QUE PERMITE EXECUTAR REPETIDAMENTE UM BLOCO DE CÓDIGO, A CADA INTERVALO DE TEMPO. EXEMPLO: DE 3 EM 3 SEGUNDOS FAÇA TAL COISA.

// setInterval (() => {})


const [numero2, setNumero2] = useState(0)
const [parar, setParar] = useState ()


//ta trabalhando dentro da função start, pq ele quer parar o start
const Start = () => {

const PararOsetInterval = setInterval(() => {
    setNumero2((numero2) => numero2 + 1)
    
}, 1000);

setParar(PararOsetInterval)


}


const reset = () => {
    clearInterval(parar)
    setNumero2(0)

}




//função para parar o estado "parar" ClearInterval para parar o estado, ou seja, o que ta sendo renderizado

const PararContagem = () => clearInterval(parar)


    return (
        <footer>
            <button onClick={Mensagem}>MENSAGEM</button>

            <div className="boxFooter">
                <h2>Contador usando o setTimeout</h2>
                <h2>{numero}</h2>
                <button onClick={Add}> Add + 1 </button>
            </div>

            <div className="boxFooter">
                <h2>Cronômetro</h2>
                <h2>{numero2}</h2>
                <button onClick={Start}>Start</button>
                <button onClick={PararContagem} >Pause</button>
                <button onClick={reset}>Zerar</button>
            </div>


        </footer>
    )
}


export default Footer