import { useState } from "react";
export default function Carta(props) {
    const {setFlashRespondidos, flashRespondidos, classe, setClasse, respostas, setRespostas} = props;
    const [flashSelecionado, setFlashSelecionado] = useState(false);
    const [flashVirado, setFlashVirado] = useState(false);
    const [registro, setRegistro] = useState(classe);
    let a = (classe.length === 0 || classe !== "carta incorreta" || classe !== "carta incorreta")
    function alteraArray(string){
        let novoArray = classe
        novoArray[props.index] = string;
        // console.log(novoArray);
    }
    
    if(flashVirado){
        return (
            <div className="carta selecionada">
                <p>{props.resposta}</p>
                <div className="botoes">
                    <button className="nao-lembrei" onClick={()=> {
                        setFlashVirado(false);
                        setFlashSelecionado(false);
                        alteraArray("carta incorreta");
                        setRespostas(respostaAntiga => [...respostaAntiga, "carta incorreta"])
                        // setRegistro("carta incorreta");
                        // setClasse(["carta incorreta"])
                        // setClasse(classeAntiga => [...classeAntiga,"carta incorreta"])
                        setFlashRespondidos(flashRespondidos+1);
                    }}>Não lembrei</button>
                    <button className="quase-nao-lembrei" onClick={()=> {
                        setFlashVirado(false);
                        setFlashSelecionado(false);
                        alteraArray("carta quase-correta");   
                        setRespostas(respostaAntiga => [...respostaAntiga, "carta quase-correta"])  
                        setFlashRespondidos(flashRespondidos+1);
                    }}>Quase não lembrei</button>
                    <button className="zap" onClick={()=> {
                        setFlashVirado(false);
                        setFlashSelecionado(false);
                        alteraArray("carta correta");
                        setRespostas(respostaAntiga => [...respostaAntiga, "carta correta"])  
                        setFlashRespondidos(flashRespondidos+1);
                    }}>Zap!</button>
                </div>
            </div> 
        );
    }
    if(!flashSelecionado){
        return classe[props.index] === "" ?(
            <div className="carta" onClick={() => setFlashSelecionado(true)}>
                <p className="pergunta">Pergunta {props.index+1}</p>
                <ion-icon name="play-outline"className="icone"></ion-icon>
            </div>
        ):(
            <div className={classe[props.index]}>
                <p className="pergunta">Pergunta {props.index+1}</p>
                <ion-icon name="play-outline"className="icone"></ion-icon>
            </div>
        )
    }
    if(flashSelecionado){
        return (
            <div className="carta selecionada">
                <p>{props.pergunta}</p>
                <ion-icon name="sync-outline" onClick={()=> setFlashVirado(true)}></ion-icon>
            </div>
        );
    }
}
// return classe.length > 4 ?(
//     <div className={classe[props.index+3+aux]}>
//         <p className="pergunta">Pergunta {props.index+1}</p>
//         <ion-icon name="play-outline"className="icone"></ion-icon>
//     </div>
// ):(
//     <div className="carta" onClick={() => setFlashSelecionado(true)}>
//         <p className="pergunta">Pergunta {props.index+1}</p>
//         <ion-icon name="play-outline"className="icone"></ion-icon>
//     </div>
// )


// return classe[props.index] === "" ?(
//     <div className="carta" onClick={() => setFlashSelecionado(true)}>
//         <p className="pergunta">Pergunta {props.index+1}</p>
//         <ion-icon name="play-outline"className="icone"></ion-icon>
//     </div>
// ):(
//     <div className={classe[props.index+3+aux]}>
//         <p className="pergunta">Pergunta {props.index+1}</p>
//         <ion-icon name="play-outline"className="icone"></ion-icon>
//     </div>
// )