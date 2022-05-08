import react, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';
import '../../Cadastro/Aluno/Tarefaa.scss'

export const Tarefaa = props =>{

    const [tarefa, setTarefa] = useState([]);
    const { session } = useContext(StoreContext);
    const {id} = useParams();

    useEffect(() => {
        const getTarefas = async () => {

            
            console.log(id);
            /*const tarefas = await api('/tarefa/aluno/'+session.id+'/get_atuais');

            console.log(tarefas);

            setTarefas(tarefas); */
        };

        getTarefas();
    }, []);

    return(
        <main>
            <h1> Qual a cor do cavalo Branco de Napoleão? </h1>
                <div class="container">
                <form>
                    <label>
                        <input type="radio" name="radio" checked/>
                        <span>Rosa</span>
                    </label>
                    <label>
                        <input type="radio" name="radio"/>
                        <span>Preto</span>
                    </label>
                    <label>
                        <input type="radio" name="radio"/>
                        <span>Verde</span>
                    </label>
                    <label>
                        <input type="radio" name="radio"/>
                        <span>Braco</span>
                    </label>
	            </form>
                </div>
        </main>
    )
}