import react, {useEffect, useState, useContext} from 'react';
import Table from '../Table/Table';
import api from '../../utils/api';

import StoreContext from '../store/Context';


export const ListarExercicios = props =>{

    const [exercicios, setExercicios] = useState([]);
    const { session } = useContext(StoreContext);

    useEffect(() => {
        async function getExercicios(){

            const e = await api('/exercicio/'+ session.id, 'GET');
        
            console.log(e);
            
            let i = [];
                
            i = e.map(
                (ex) => {
                    const r = {
                        id: ex.id,
                        values: [
                            {
                                "name": "titulo",
                                "value": ex.titulo
                            },
                            {
                                "name": "materia",
                                "value": ex.materia
                            }
                        ] 
                    };
                
                    return r;
                } 
            );
        
            setExercicios(i);
        }

        getExercicios();
    }, []);

    const columns = [
        {
            "name": "titulo",
            "label": "Titulo"
        },
        {
            "name": "materia",
            "label": "Matéria"
        }
    ];

    return(
        <main class='container'>
            <h1>Lista de Exercícios</h1>    
            <Table columns={columns} itens={exercicios}></Table>
        </main>
    )
}