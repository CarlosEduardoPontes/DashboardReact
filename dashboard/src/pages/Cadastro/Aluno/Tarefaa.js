import react, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';
import '../../Cadastro/Aluno/Tarefaa.scss'

export const Tarefaa = props =>{

    const [tarefa, setTarefa] = useState([]);
    const [questao, setQuestao] = useState(0);
    const { session } = useContext(StoreContext);
    const {id} = useParams();

    const nextExercicio = () => {
        setQuestao( questao + 1);
    };

    const previousExercicio = () => {
        setQuestao( questao - 1);
    };

    useEffect(() => {
        const getTarefas = async () => {

            
            console.log(id);
            const tarefa = await api('/tarefa/get/'+id);

            console.log(tarefa);

            setTarefa(tarefa); 
        };

        getTarefas();
    }, []);

    return(
        <main>
            <h1>{ tarefa.exercicios ? tarefa.exercicios[questao].desc:'Carregando'}</h1>
            <div class="container">
                <form>
                {
                    tarefa.exercicios ? tarefa.exercicios[questao].exerciciosAlternativa.map(
                        alt => (
                        <label key={alt.id}>
                        <input type="radio" name="radio" />
                        <span>{alt.resposta}</span>
                        </label>
                    )
                    ) : null
                }
                    <div className='div-buttons'>
                    {questao > 0 ? <button onClick={previousExercicio} type='button'>Anterior</button> : null}
                    {
                        questao < tarefa.exercicios.length -1 ?
                        <button onClick={nextExercicio} type='button'>Próximo</button>:
                        <button type='button'>Finalizar</button>
                    }
                    </div>
	            </form>
            </div>
        </main>
    )
}