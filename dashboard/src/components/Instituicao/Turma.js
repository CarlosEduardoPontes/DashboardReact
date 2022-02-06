import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import api from '../../utils/api';
import '../../../src/pages/Cadastro/Cadastro.css'

export const InstituicaoTurma = props =>{
    let [itens, setItens] = useState([]);

    useEffect( () => {
        async function getTurmas(){

            const turmas = await api('/turma', 'GET');
        
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