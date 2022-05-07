import react, { useContext, useEffect, useState } from 'react';
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';

export const Tarefaa = props =>{

    const [tarefa, setTarefa] = useState([]);
    const { session } = useContext(StoreContext);
    
    useEffect(() => {
        const getTarefas = async () => {
            /*const tarefas = await api('/tarefa/aluno/'+session.id+'/get_atuais');

            console.log(tarefas);

            setTarefas(tarefas); */
        };

        //getTarefas();
    }, []);

    return(
        <main class='container'>
            <h1>Tarefa</h1>
            
        </main>
    )
}