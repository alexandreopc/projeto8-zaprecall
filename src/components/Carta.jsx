import { useState } from "react";

export default function Carta(props) {
    const [flashAtivo, setFlashAtivo] = useState(false);
    const [resposta, setResposta] = useState("");
    return flashAtivo?(
        <div className="carta">
            <p>{props.flash}</p>
            <div className="botoes">
                <button onClick={() => setResposta("")}>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
            </div>
        </div>
    ) : (
        <div className="carta" onClick={() => setFlashAtivo(true)}>
            <p>Pergunta {props.index+1}</p>
        </div>
    )
}