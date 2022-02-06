import React, { useEffect, useState, useContext } from 'react';
import Table from '../Table/Table';
import api from '../../utils/api';
import '../../../src/pages/Cadastro/Cadastro.css'

import StoreContext from '../store/Context';

export const InstituicaoAluno = props =>{
    let [itens, setItens] = useState([]);

    const { session } = useContext(StoreContext);

    useEffect( () => {
        async function getAlunos(){

            const alunos = await api('/aluno/' + session.id, 'GET')
            .catch( e => console.log(e));

            console.log(alunos);
            
            let i = [];
                
            i = alunos.map(
                (aluno) => {
                    const datas = aluno.data_nasc.split('-');

                    const data = datas[2] + '/' + datas[1] + '/' + datas[0];

                    const r = {
                        id: aluno.id,
                        values: [
                            {
                                "name": "nome",
                                "value": aluno.nome
                            },
                            {
                                "name": "identidade",
                                "value": aluno.identidade
                            },
                            {
                                "name": "data_nasc",
                                "value": data
                            }
                        ] 
                    };
                
                    return r;
                } 
            );
        
            setItens(i);
        }

        getAlunos();
        
    }, []);
    
    const columns = [
        {
            "name": "nome",
            "label": "Nome"
        },
        {
            "name": "identidade",
            "label": "Identidade"
        },
        {
            "name": "data_nasc",
            "label": "Data nascimento"
        }
    ]

    console.log(columns);


    return(
        <main>
            <h1 className='title-list'> Alunos </h1>
                <div className='lista-alunos'>
                    <Table columns={columns} itens={itens}></Table>
                </div>
        </main>
    )
}