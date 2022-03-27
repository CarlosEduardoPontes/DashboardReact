import React, { useEffect, useState, useContext } from 'react';
import Table from '../Table/Table';
import api from '../../utils/api';
import '../../../src/pages/Cadastro/Cadastro.css';

import StoreContext from '../store/Context';

export const ProfessorTurma = props =>{
    let [itens, setItens] = useState([]);

    const {session} = useContext(StoreContext);
    useEffect( () => {
        async function getTurmas(){

            const turmas = await api('/list/professor/turma/' + session.id , 'GET');
        
            console.log(turmas);
            
            let i = [];
                
            i = turmas.map(
                (turma) => {

                    const datas = turma.data_inicio.split('-');

                    const data = datas[2] + '/' + datas[1] + '/' + datas[0];

                    const r = {
                        id: turma.id,
                        values: [ 
                            {
                                "name": "nome",
                                "value": turma.nome
                            },
                            {
                                "name": "periodo",
                                "value": turma.periodo
                            },
                            {
                                "name": "dataInicio",
                                "value": data
                            }
                        ] 
                    };
                
                    return r;
                } 
            );
        
            setItens(i);
        }

        getTurmas();
        
    }, []);

    const columns = [
        {
            "name": "nome",
            "label": "Nome"
        },
        {
            "name": "periodo",
            "label": "Período"
        },
        {
            "name": "dataInicio",
            "label": "Data de início"
        }
    ];

    return(
        <main>
            <h1 className='title-list'> Turmas </h1>
                <div className='lista-turma'>
                    <Table columns={columns} itens={itens}></Table>
                </div>
        </main>
    )
}