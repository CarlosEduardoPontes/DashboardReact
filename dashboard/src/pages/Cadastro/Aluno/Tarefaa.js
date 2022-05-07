import react, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';

export const Tarefaa = props =>{

    const [tarefa, setTarefa] = useState([]);
    const { session } = useContext(StoreContext);
    const {id} = useParams();

    useEffect(() => {
        const getTarefas = async () => {

            
            console.log(id);
            /*const tarefas = await api('/tarefa/aluno/'+session.id+'/get_atuais');

            console.log(tarefas);

            setTarefas(tarefas); */
        };

        getTarefas();
    }, []);

    return(
        <main class='container'>
            <h1>Tarefa</h1>
            
        </main>
    )
}