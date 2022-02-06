import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import api from '../../utils/api';
import '../../../src/pages/Cadastro/Cadastro.css'

export const InstituicaoMateria = props =>{
    let [itens, setItens] = useState([]);

    useEffect( () => {
        async function getMaterias(){

            const materias = await api('/materia', 'GET');
        
            let i = [];
                
            i = materias.map(
                (materia) => {
                    const r = {
                        id: materia.id,
                        values: [
                            {
                                "name": "nome",
                                "value": materia.nome
                            }
                        ] 
                    };
                
                    return r;
                } 
            );
        
            setItens(i);
        }

        getMaterias();
        
    }, []);
    
    const columns = [
        {
            "name": "nome",
            "label": "Nome"
        }
    ]

    console.log(columns);

    console.log(itens);




    return(
        <main>
            <h1 className='title-list'> Matérias </h1>
                <div className='lista-materias'>
                    <Table columns={columns} itens={itens}></Table>
                </div>
        </main>
    )
}
