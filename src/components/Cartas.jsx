import Carta from './Carta'
import { useState } from "react";
export default function Cartas() {
    const [flashAtivo, setFlashAtivo] = useState(false);
    const flashCards = ["O que é JSX?", "O React é __ ", "Componentes devem iniciar com __", "Podemos colocar __ dentro do JSX"];
    return (
        <div className="cartas">
            {flashCards.map((flashCard, index) => <Carta key={flashCard} flash={flashCard} index={index}/>)}
        </div>
    );
}