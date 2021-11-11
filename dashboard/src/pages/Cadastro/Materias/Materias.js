import React, { useContext, useState } from 'react';
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';
import '../Cadastro.css'

const initialState = () => {
    return '';
}

export const Materias = props =>{
    const { session } = useContext(StoreContext);

    const [nome, setNome] = useState(initialState);

    const handleChange = (event) => {
        const { value } = event.target;

        setNome(value);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        const form = {
            nome
        };

        form.idInstituicao = session.id;
        console.log(form);

        api('/materia', 'POST', form)
        .then( () => alert('Cadastro efetuado com sucesso!'))
        .catch( err => {console.log(err); alert('Falha ao cadastrar!')});
        
    } 

    return(
        <main class='container'>
            <form class='card' onSubmit={onSubmit}>
                <h3>Cadastro de Materias</h3>
                
                <div class='label-float'>
                    <input 
                        type='text'
                        placeholder='Nome da matéria*'
                        onChange={handleChange}
                        defaultValue={nome}
                        name='nome'
                    ></input>
                    <label for='nome'></label>
                </div>
                                
                <div>
                    <button>Cadastrar</button>
                </div>

            </form>
        </main>
        
    )
}