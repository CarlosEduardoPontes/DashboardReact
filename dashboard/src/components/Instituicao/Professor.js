import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import api from '../../utils/api';
import '../../../src/pages/Cadastro/Cadastro.css'

export const InstituicaoProfessor = props =>{
    let [itens, setItens] = useState([]);

    useEffect( () => {
        async function getProfessores(){

            const professores = await api('/professor', 'GET');
        
            console.log(professores);
            
            let i = [];
                
            i = professores.map(
                (professor) => {
                    const r = {
                        id: professor.id,
                        values: [
                            {
                                "name": "nome",
                                "value": professor.nome
                            },
                            {
                                "name": "identificacao",
                                "value": professor.identificacao
                            }
                        ] 
                    };
                
                    return r;
                } 
            );
        
            setItens(i);
        }

        getProfessores();
        
    }, []);

    const columns = [
        {
            "name": "nome",
            "label": "Nome"
        },
        {
            "name": "identificacao",
            "label": "Identidade"
        }
    ]

    return(
        <main>
            <h1 className='title-list'> Professores </h1>
                <div className='lista-Prof'>
                    <Table columns={columns} itens={itens}></Table>
                </div>
        </main>
        
    )
}