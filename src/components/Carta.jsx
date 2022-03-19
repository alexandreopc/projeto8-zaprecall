import { useState } from "react";

export default function Carta(props) {
    const [flashSelecionado, setFlashSelecionado] = useState(false);
    const [flashVirado, setFlashVirado] = useState(false);
    const [resposta, setResposta] = useState("");
    if(flashVirado){
        return (
            <div className="carta">
                <p>{props.flash}</p>
                <div className="botoes">
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
            </div> 
        );
    }
    if(!flashSelecionado){
        return (
            <div className="carta" onClick={() => setFlashSelecionado(true)}>
                <p>Pergunta {props.index+1}</p>
            </div>
        );
    }
    if(flashSelecionado){
        return (
            <div className="carta">
                <p>{props.flash}</p>
                <div onClick={()=> setFlashVirado(true)}>
                    <p>botao</p>
                </div>
            </div>
        );
    }
//     return flashSelecionado?(
//         <div className="carta">
//             <p>{props.flash}</p>
//             <div className="botoes">
//                 <button onClick={() => setResposta("")}>Não lembrei</button>
//                 <button>Quase não lembrei</button>
//                 <button>Zap!</button>
//             </div>
//         </div>
//     ) : (
//         <div className="carta" onClick={() => setFlashSelecionado(true)}>
//             <p>Pergunta {props.index+1}</p>
//         </div>
//     )
}