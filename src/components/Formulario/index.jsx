import { useState } from "react";

const Formulario = () => {
    // estado e eventos abaixo
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);

    let [nome, setNome] = useState(' ');

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            return evento.target.value;
        })

    }

    const rendeirizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7){
            return (
                <p>Olá {nome} Voçê foi aprovado</p>
            )
        } else{
            return(

                <p>Olá {nome} Voçe foi reprovado</p>
            )
        }
    }

// destruturação o evento
    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota Matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {rendeirizaResultado()}
        </form>
        
    )

}

export default Formulario; 