import react, {useEffect, useState, useContext} from 'react';
import Table from '../Table/Table';
import api from '../../utils/api';

import StoreContext from '../store/Context';

export const ListarTarefa = props =>{
    const [tarefas, setTarefas] = useState([]);
    const { session } = useContext(StoreContext);

    useEffect(() => {
        async function getTarefas(){

            const t = await api('/tarefa/listar/totais/'+ session.id, 'GET');
        
            console.log(t);
            
            let i = [];
                
            i = t.map(
                (ta) => {

                    const dtComecoSplit = ta.dt_comeco.split(' ');
                    const dtCSplit = dtComecoSplit[0].split('-');
                    ta.dt_comeco = dtCSplit[2] + '/' + dtCSplit[1] + '/' + dtCSplit[0] + ' ' + dtComecoSplit[1]

                    const dtFimSplit = ta.dt_fim.split(' ');
                    const dtFSplit = dtFimSplit[0].split('-');
                    ta.dt_fim = dtFSplit[2] + '/' + dtFSplit[1] + '/' + dtFSplit[0] + ' ' + dtFimSplit[1]

                    const r = {
                        id: ta.id,
                        values: [
                            {
                                "name": "titulo",
                                "value": ta.titulo
                            },
                            {
                                "name": "materia",
                                "value": ta.materia
                            },
                            {
                                "name": "dt_comeco",
                                "value": ta.dt_comeco
                            },
                            {
                                "name": "dt_fim",
                                "value": ta.dt_fim
                            }
                        ] 
                    };
                
                    return r;
                } 
            );
        
            setTarefas(i);
        }

        getTarefas();
    }, []);

    const columns = [
        {
            "name": "titulo",
            "label": "Titulo"
        },
        {
            "name": "materia",
            "label": "Matéria"
        },
        {
            "name": "dt_comeco",
            'label': "Data de início"
        },
        {
            "name": "dt_fim",
            'label': "data de término"
        }
    ];

    return(
        <main class='container'>
            <h1>Lista de Tarefas</h1>    
            <Table columns={columns} itens={tarefas}></Table>
        </main>
    )
}