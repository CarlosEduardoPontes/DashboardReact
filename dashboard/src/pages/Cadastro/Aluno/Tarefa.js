import react, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';
import '../../../style/Tarefa.scss';

export const Tarefa = props =>{

    const [tarefas, setTarefas] = useState([]);
    const { session } = useContext(StoreContext);
    useEffect(() => {
        const getTarefas = async () => {
            const tarefa = await api('/tarefa/aluno/'+session.id+'/get_atuais');

            console.log(tarefa);


            setTarefas(tarefa);

            console.log(tarefas);

        };

        getTarefas();
    }, []);
    return(
        <main>
            <h1>Tarefas dos Alunos</h1>
            {tarefas.map( t => {
                t.data = t.dt_fim.split(' ');

                const dataSplit = t.data[0].split('-');

                t.data[0] = dataSplit[2]+'/'+dataSplit[1]+'/'+dataSplit[0];
                
                return(
                    <div class='container'>
                        <div className='div-tarefa'>
                            <div className='div-tarefa-grid'>
                            <div key={t.id}>
                                <Link to= {"/tarefa/realizar/"+t.id}>
                                <main className='tarefa'>
                                    <table class="rwd-table">
                                        <tr class="rwd-table">
                                            <th>Matéria:</th>
                                                <td data-th="Materia">{t.materia}</td><br></br>
                                            <th>Titulo:</th>
                                                <td data-th="Titulo">{t.titulo}</td><br></br>
                                            <th>Descrição da Tarefa:</th>
                                                <td data-th="Desc-trarefa">{t.desc}</td><br></br>
                                            <th>Pontos:</th>
                                                <td data-th="Pontos">{t.pontos}</td><br></br>
                                            <th>Termina em:</th>
                                                <td data-th="Termino">{t.data[0] } às { t.data[1] }</td><br></br>
                                        </tr>
                                    </table>
                                </main>
                                </Link>
                            </div>
                        </div> 
                    </div>
                    </div>
                )
            }
            )}
            
        </main>
    )
}