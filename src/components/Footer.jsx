export default function Footer(props){
    let aux = 0;
    function verificaVitoria(arr) {
        arr.map((resposta) => {
            if(resposta === "carta incorreta")
                aux++;
    })}
     
    if(props.respostas.length < 8){
        return (
            <div className="footer">
                <p>{props.flashRespondidos}/8 CONCLUÍDOS</p>
                <div className="respostas">
                    {props.respostas.map((resposta)=> {
                        if(resposta === "carta incorreta"){
                            return <ion-icon class="wrong-icon md hydrated" name="close-circle"></ion-icon>
                        }
                        if(resposta === "carta quase-correta")
                            return <ion-icon class="in-between-icon md hydrated" name="help-circle"></ion-icon>
                        if(resposta === "carta correta")
                            return <ion-icon class="success-icon md hydrated" name="checkmark-circle"></ion-icon>
                    })}
                </div>
            </div>
        );
    }else{
        verificaVitoria(props.respostas) 
        if(aux === 1){
        return (
            <div className="footer finalizado">
                <p>{props.flashRespondidos}/8 CONCLUÍDOS</p>
                <div className="respostas">
                    <img src="./../public/assets/sad.png" alt="sad"/>
                    {props.respostas.map((resposta)=> {
                        if(resposta === "carta incorreta"){
                            return <ion-icon class="wrong-icon md hydrated" name="close-circle"></ion-icon>
                        }
                        if(resposta === "carta quase-correta")
                            return <ion-icon class="in-between-icon md hydrated" name="help-circle"></ion-icon>
                        if(resposta === "carta correta")
                            return <ion-icon class="success-icon md hydrated" name="checkmark-circle"></ion-icon>
                    })}
                </div>
            </div>
            );
        }else{
            return (
                <></>
            );
        }

    }
}
