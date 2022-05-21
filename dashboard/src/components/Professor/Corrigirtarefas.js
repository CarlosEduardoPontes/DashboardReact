import react, { useEffect, useState, useContext }from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../utils/api';
import StoreContext from '../store/Context';
import './../../style/CorrigirTarefas.css'

export const CorrigirTarefa = props =>{

    const { session } = useContext(StoreContext);

    const [tarefas, setTarefas] = useState([]);

    const history = useHistory();

    useEffect(() =>{
        async function getTarefas(){ 

            const t = await api('/tarefa/listar/concluidas/' + session.id, 'GET');

            setTarefas(t);

            console.log(session);
            console.log(t);

            
        }

        getTarefas();
    }, []);

    const redirect = (ev) => {
        history.push('/tarefas');
    };

    return(
        <main class='container'>
            <h1>Correção</h1>
                <div class='app-hub'>
                {tarefas.map(tarefa => (
                    <div class='app-hub-1'>
                        <div class='app-hub-conteudo'>
                            <h4>{tarefa.titulo}</h4>
                            <span>Aluno: {tarefa.nome}</span>
                            <span>Feito em {tarefa.dt_submissao}</span>
                            <div class='app-hub-btn'>
                                <div>
                                    <button onClick={redirect} class='app-hub-button'>Corrigir</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    )   
                )} 
                    
            </div>
        </main>
    )
}