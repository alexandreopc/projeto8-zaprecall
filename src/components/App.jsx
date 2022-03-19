import React from "react";
import Cartas from "./Cartas";
export default function App() {
    const [telaInicial, setTelaInical] = React.useState("true");
    return telaInicial ? (
        <div className="container">
            <div className="logo">
                <img src="assets/logo.png" alt="logo"/>
                <h1>ZapRecall</h1>
            </div>
            <button className="inicio" onClick={() => setTelaInical(false)}>Iniciar Recall!</button>
        </div>
    ) : (
        <>
            <header>
                <img src="assets/logo-pequeno.png" alt="logo"/>
                <span>ZapRecall</span>
            </header>
            <main>
                <Cartas />
            </main>
            <footer>
                <p>0/4 CONCLUÍDOS</p>
            </footer>
        </>
    );
}

