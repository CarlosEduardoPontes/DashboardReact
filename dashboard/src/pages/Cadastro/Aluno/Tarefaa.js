import react, { useContext, useEffect, useState, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';
import '../../Cadastro/Aluno/Tarefaa.scss'

export const Tarefaa = props =>{

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const [respostas, setRespostas] = useState([]);
    const [tarefa, setTarefa] = useState([]);
    const [questao, setQuestao] = useState(0);
    const { session } = useContext(StoreContext);
    const {id} = useParams();
    const date = new Date();
    const dtInicio = date.getFullYear() + '-' + (date.getMonth() + 1)  + '-' + date.getDate()
        + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    const history = useHistory();

    const nextExercicio = () => {
        setQuestao( questao + 1);
    };

    const previousExercicio = () => {
        setQuestao( questao - 1);
    };

    useEffect( () => {
        const getTarefas = async () => {

            
            console.log(id);
            const tarefa = await api('/tarefa/get/'+id);

            console.log(tarefa);

            setTarefa(tarefa);

            const r = [];

            for (const ex of tarefa.exercicios) {
                r.push('');
                
            }

            setRespostas(r);

            console.log(r);
            console.log(respostas);
        };

        getTarefas();
    }, []);

    const handleAlternativa = (event) =>{
        const r = respostas;
        r[questao] = event.target.value;

        setRespostas(r);

        console.log(respostas);
        forceUpdate();
    }

    const handleDissertativa = (event) => {
        const r = respostas;
        r[questao] = event.target.value;

        setRespostas(r);

        console.log(respostas);
    }

    const onSubmit = async () => {

        const tarefaRealizada = {
            id: id,
            dtInicio: dtInicio,
            dtSubmissao: date.getFullYear() + '-' + (date.getMonth() + 1)  + '-' + date.getDate()
            + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
            idAluno: session.id,
            exercicios: []
        };

        for (let i = 0; i < respostas.length; i++) {
            tarefaRealizada.exercicios.push(
                {
                    resposta: respostas[i],
                    id: tarefa.exercicios[i].id
                }
            );
        }

        console.log(tarefaRealizada);

        const r = await api('/tarefa/submissao', 'POST', tarefaRealizada)
        .catch( err => {console.log(err); alert('Falha ao cadastrar!')});

        if(r){
            history.push('/tarefas');
        }
    };

    return(
        <main>
            <h1 className='titulo-tarefa'>{ tarefa.exercicios ? tarefa.exercicios[questao].desc:'Carregando'}</h1>
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
                                        onChange={handleAlternativa}
                                        checked={respostas[questao] == alt.numerador}
                                    />
                                    <span class="span-respostas">{alt.resposta}</span>
                                </label>
                            )
                        ):
                            <div class="div-resposta" >
                                <textarea 
                                    class="text-resposta"
                                    defaultValue={respostas[questao]}
                                    onChange={handleDissertativa}  
                                ></textarea>
                            </div>
                    :null
                }
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
        </main>
    )
}