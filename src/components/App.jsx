import React from "react";
import Cartas from "./Cartas";
import Footer from "./Footer";
export default function App() {
    const [telaInicial, setTelaInical] = React.useState("true");
    const [flashRespondidos, setFlashRespondidos] = React.useState(0);
    const [classe, setClasse] = React.useState(["","","","","","","",""]);
    const [respostas, setRespostas] =React.useState([]);
    return telaInicial ? (
        <div className="tela-inicial">
            <div className="logo">
                <img src="assets/logo.png" alt="logo"/>
                <h1>ZapRecall</h1>
            </div>
            <button className="botao-inicio" onClick={() => setTelaInical(false)}>Iniciar Recall!</button>
        </div>
    ) : (
        <>
            <header>
                <img src="assets/logo-pequeno.png" alt="logo"/>
                <span>ZapRecall</span>
            </header>
            <main>
                <Cartas setFlashRespondidos={setFlashRespondidos} flashRespondidos={flashRespondidos} classe={classe} setClasse={setClasse} respostas={respostas} setRespostas={setRespostas}/>
                {/* {console.log(classe)} */}
            </main>
            <Footer flashRespondidos={flashRespondidos} classe={classe} respostas={respostas}/>
        </>
    );
}
