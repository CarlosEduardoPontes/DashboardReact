import react, {useEffect, useState, useReducer} from 'react';
import api from '../../utils/api';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export const CorrecaoTarefa = props =>{
    const {id} = useParams();

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const [correcoes, setCorrecoes] = useState([]);
    const [tarefa, setTarefa] = useState([]);
    const [questao, setQuestao] = useState(0);

    const history = useHistory();

    const nextExercicio = () => {
        setQuestao( questao + 1);
    };

    const previousExercicio = () => {
        setQuestao( questao - 1);
    };

    useEffect(
        () => {
            const getTarefa = async () => {
                const t = await api('/tarefa/submissao/'+id, 'GET');

                setTarefa(t);

                console.log(t);
            }

            getTarefa();
        }, []
    );
    const handleCorrecao = (event) =>{
        const c = correcoes;
        c[questao] = event.target.value;

        setCorrecoes(c);

        //console.log(respostas);
        forceUpdate();
    }

    const onSubmit = async () => {

        const tarefaCorrecao = {
            id: tarefa.id,
            exercicios: []
        };

        for (let i = 0; i < correcoes.length; i++) {
            tarefaCorrecao.exercicios.push(
                {
                    correcao: correcoes[i],
                    id: tarefa.exercicios[i].id
                }
            );
        }

        console.log(tarefaCorrecao);

        const r = await api('/tarefa/correcao', 'PUT', tarefaCorrecao)
        .catch( err => {console.log(err); alert('Falha ao cadastrar!')});

        if(r){
            history.push('/corrigirtarefas');
        }
    };

    return(
        <main class='container'>
            {tarefa.id ?
            <>
                <h1>{tarefa.exercicios[questao].desc}</h1>
                <div class="container-respostas">
                <form class="form-respostas">
                {
                    tarefa.exercicios ? 
                    tarefa.exercicios[questao].categoria === 'ALTERNATIVA' ?
                        tarefa.exercicios[questao].exerciciosAlternativa.map(
                            alt => (
                                <label class="label-respostas" key={alt.id}>
                                    <input 
                                        class="input-respostas" 
                                        type="radio" 
                                        value={alt.numerador} 
                                        name="alternativa"
                                        checked={tarefa.exercicios[questao].resposta == alt.numerador}
                                        readOnly
                                    />
                                    <span class="span-respostas">{alt.resposta}</span>
                                </label>
                            )
                        ):
                            <div class="div-resposta" >
                                <textarea 
                                    class="text-resposta"
                                    defaultValue={tarefa.exercicios[questao].resposta}  
                                ></textarea>
                            </div>
                    :null
                }
                    <div className='div-corrigir'>
                        <label class="label-correcao" >
                            <input 
                                class="input-correcao" 
                                type="radio" 
                                value="CORRETO" 
                                name="correcao"
                                checked={correcoes[questao] == "CORRETO"}
                                onChange={handleCorrecao}
                            />
                            <span class="span-respostas">Correto</span>
                        </label>

                        <label class="label-correcao" >
                            <input 
                                class="input-correcao" 
                                type="radio" 
                                value="SEMI_CORRETO" 
                                name="correcao"
                                checked={correcoes[questao] == "SEMI_CORRETO"}
                                onChange={handleCorrecao}
                            />
                            <span class="span-respostas">Semi-correto</span>
                        </label>

                        <label class="label-correcao" >
                            <input 
                                class="input-correcao" 
                                type="radio" 
                                value="ERRADO" 
                                name="correcao"
                                checked={correcoes[questao] == "ERRADO"}
                                onChange={handleCorrecao}
                            />
                            <span class="span-respostas">Errado</span>
                        </label>
                    </div>
                    <div className='div-buttons'>
                    {questao > 0 ? <button className='btn-anterior' onClick={previousExercicio} type='button'> Anterior</button> : null}
                    {
                        tarefa.exercicios ? questao < tarefa.exercicios.length -1 ?

                        <button className='btn-proximo' onClick={nextExercicio} type='button'>Próximo</button>:
                        <button className='btn-finalizar' onClick={onSubmit} type='button' >Finalizar</button>
                        :null
                    }
                    </div>
	            </form>
            </div>
            </>
             : null}
                
        </main>
    )
}