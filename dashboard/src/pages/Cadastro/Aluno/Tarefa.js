import react, { useContext, useEffect, useState } from 'react';
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';

export const Tarefa = props =>{

    const [tarefas, setTarefas] = useState([]);
    const { session } = useContext(StoreContext);
    useEffect(() => {
        const getTarefas = async () => {
            const tarefas = await api('/tarefa/aluno/'+session.id+'/get_atuais');

            console.log(tarefas);

            setTarefas(tarefas);
        };

        getTarefas();
    }, []);
    return(
        <main class='container'>
            <h1>Tarefas dos Alunos</h1>
            {tarefas.map( t => (
            <div className='div-tarefa'>    
                <h2>{t.materia}</h2>
                <h2>{t.titulo}</h2>
                <h2>Pontos: {t.pontos}</h2>
                <h2>Termina em: { t.dt_fim }</h2>
            </div>
            )
            )}
            
        </main>
    )
}