import React, { useContext, useState } from 'react';
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';
import '../Cadastro.css'

const initialState = () => {
    return {
        'nome': '',
        'identificacao': '',
        'usuario': '',
        'email': '',
        'senha': '',
        'confirmaSenha': ''
    }
}

export const Professor = props =>{
    const { session } = useContext(StoreContext);

    const [spanErro, setSpanErro] = useState('');
    const [form, setForm] = useState(initialState);

    const handleChange = (event) => {
        
        const { value, name } = event.target;
    
        setForm({
          ...form,
          [name]: value
        });
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        form.idInstituicao = session.id;
        console.log(form);

        if(comparaSenha()){
            api('/professor', 'POST', form)
            .then( () => alert('Cadastro efetuado com sucesso!'))
            .catch( err => {console.log(err); alert('Falha ao cadastrar!')});
        }
    } 

    const comparaSenha = () => {
        const igual = form.senha === form.confirmaSenha;
        setSpanErro(igual ? '' : 'As senhas não são iguais!');

        return igual;
    }

    return(
        <main class='container'>
            <form class='card' onSubmit={onSubmit}>
                <h3>Cadastro de Professores</h3>
                
                
                <div class='label-float'>
                    <input 
                        type='text'
                        placeholder='Nome Completo*'
                        onChange={handleChange}
                        defaultValue={form.nome}
                        name='nome'    
                    ></input>
                    <label for='nome'></label>
                </div>
                
                <div class='label-float'>
                    <input 
                        type='number' 
                        placeholder='Identificação *'
                        onChange={handleChange}
                        defaultValue={form.identificacao}
                        name='identificacao'
                    ></input>
                    <label for='identificacao'></label>
                </div>
                
                <div class='label-float'>
                    <input 
                        type='text' 
                        placeholder='Usuário *'
                        onChange={handleChange}
                        defaultValue={form.usuario}
                        name='usuario'
                    ></input>
                    <label for='usuario'></label>
                </div>

                <div class='label-float'>
                    <input 
                        type='email'
                        placeholder='E-mail *'
                        onChange={handleChange}
                        defaultValue={form.email}
                        name='email'
                    ></input>
                    <label for='email'></label>
                </div>

                <div class='label-float'>
                    <input 
                        type='password' 
                        placeholder='Senha *'
                        onChange={handleChange}
                        defaultValue={form.senha}
                        name='senha'
                    ></input>
                    <label for='senha'></label>
                </div>

                <div class='label-float'>
                    <input 
                        type='password'
                        placeholder='Confirmar senha *'
                        onChange={handleChange}
                        defaultValue={form.confirmaSenha}
                        name='confirmaSenha'
                    ></input>
                    <label for='confirmaSenha'></label>
                </div>

                <span className='span-erro'>{spanErro}</span>
                
                <div>
                    <button className='botao-cadastrar'>Cadastrar</button>
                </div>

            </form>
        </main>
        
    )
}