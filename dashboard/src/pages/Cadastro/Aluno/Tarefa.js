import react, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';
import '../../Cadastro/Aluno/Tarefa.scss';

export const Tarefa = props =>{

    const [tarefas, setTarefas] = useState([]);
    const { session } = useContext(StoreContext);
    useEffect(() => {
        const getTarefas = async () => {
            const tarefas = await api('/tarefa/aluno/'+session.id+'/get_atuais');

            console.log(tarefas);

            setTarefas(tarefas);
        };

        getTarefas();
    }, []);
    return(
        <main class='container'>
            <h1>Tarefas dos Alunos</h1>
            {tarefas.map( t => {
                t.data = t.dt_fim.split(' ');

                const dataSplit = t.data[0].split('-');

                t.data[0] = dataSplit[2]+'/'+dataSplit[1]+'/'+dataSplit[0];
                
                return(
                    <div key={t.id} className='div-tarefa'>
                        <Link to= {"/tarefa/realizar/"+t.id}>
                        <main className='tarefa'>
                            <table class="rwd-table">
                                <tr>
                                    <th>Matéria:</th>
                                    <th>Titulo:</th>
                                    <th>Descrição da Tarefa:</th>
                                    <th>Pontos:</th>
                                    <th>Termina em:</th>
                                </tr>
                                <tr>
                                    <td data-th="Materia">{t.materia}</td>
                                    <td data-th="Titulo">{t.titulo}</td>
                                    <td data-th="Desc-trarefa">{t.desc}</td>
                                    <td data-th="Pontos">{t.pontos}</td>
                                    <td data-th="Termino">{t.data[0] } às { t.data[1] }</td>
                                </tr>
                            </table>
                        </main>
                        </Link> 
                    </div>
                )
            }
            )}
            
        </main>
    )
}