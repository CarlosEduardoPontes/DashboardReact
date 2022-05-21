import react from 'react';
import api from '../../utils/api';
import { useParams } from 'react-router-dom';

export const CorrecaoTarefa = props =>{
    const {id} = useParams();

    return(
        <main class='container'>
            <h1>Tarefa {id}</h1>    
        </main>
    )
}