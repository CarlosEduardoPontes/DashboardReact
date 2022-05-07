import react, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
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
            {tarefas.map( t => {
                t.data = t.dt_fim.split(' ');

                const dataSplit = t.data[0].split('-');

                t.data[0] = dataSplit[2]+'/'+dataSplit[1]+'/'+dataSplit[0];
                
                return(
                    <div key={t.id} className='div-tarefa'>
                        <Link to= {"/tarefa/realizar/"+t.id}>
                            <h2>{t.materia}</h2>
                            <h2>{t.titulo}</h2>
                            <h2>{t.desc}</h2>
                            <h2>Pontos: {t.pontos}</h2>
                            <h2>Termina em: { t.data[0] } às { t.data[1] }</h2>
                        </Link> 
                    </div>
                )
            }
            )}
            
        </main>
    )
}