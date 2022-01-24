import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import api from '../../utils/api';
import '../../../src/pages/Cadastro/Cadastro.css'

export const InstituicaoAluno = props =>{
    let [itens, setItens] = useState([]);

    useEffect( () => {
        async function getAlunos(){

            const alunos = await api('/aluno', 'GET');
        
            let i = [];
                
            i = alunos.map(
                (aluno) => {
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
                                "value": aluno.data_nasc
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

    console.log(itens);

    return(
        <main>
            <h1 className='title-list'> Alunos </h1>
                <div className='lista-alunos'>
                    <Table columns={columns} itens={itens}></Table>
                </div>
        </main>
    )
}