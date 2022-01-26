import React, { useState } from 'react';
import '../Cadastro.css';

import api from '../../../utils/api';

const initialState = () => {
    return {
        'cnpj' : '',
        'razaoSocial': '',
        'nomeFantasia': '',
        'usuario': '',
        'email': '',
        'senha': '',
        'confirmaSenha': ''
    };
}



const Instituicao = props =>{

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
        console.log(form);

        if(comparaSenha()){
            api('/instituicao', 'POST', form)
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
        <main className='container'>
            <form className='card' onSubmit={onSubmit}>

            <h3>Cadastro da Instituição</h3>
                
                <div className='label-float'>
                    <input 
                        type='number' 
                        placeholder='CNPJ *' 
                        onChange={handleChange} 
                        defaultValue={form.cnpj}
                        name='cnpj'
                    ></input>
                    <label for='cnpj'></label>
                </div>
                
                <div className='label-float'>
                    <input 
                        type='text' 
                        placeholder='Razão Social *' 
                        onChange={handleChange} 
                        defaultValue={form.razaoSocial}
                        name='razaoSocial'
                    ></input>
                    <label for='razao_social'></label>
                </div>
                
                <div className='label-float'>
                    <input 
                        type='text' 
                        placeholder='Nome da Instituição *' 
                        onChange={handleChange} 
                        defaultValue={form.nomeFantasia}
                        name='nomeFantasia'
                    ></input>
                    <label for='nome_fantasia'></label>
                </div>
                
                <div className='label-float'>
                    <input 
                        type='text' 
                        placeholder='Nome de Usuário *' 
                        onChange={handleChange} 
                        defaultValue={form.usuario}
                        name='usuario'
                    ></input>
                    <label for='usuario'></label>
                </div>
                
                <div className='label-float'>
                    <input 
                        type='text' 
                        placeholder='e-mail *' 
                        onChange={handleChange} 
                        defaultValue={form.email}
                        name='email'
                    ></input>
                    <label for='email'></label>
                </div>

                <div className='label-float'>
                    <input 
                        type='password' 
                        placeholder='Senha *' 
                        onChange={handleChange} 
                        defaultValue={form.senha}
                        name='senha'
                    ></input>
                    <label for='senha'> </label>
                </div>

                <div className='label-float'>
                    <input  
                        type='password' 
                        onChange={handleChange} 
                        placeholder='Confirmar Senha *' 
                        defaultValue={form.confirmaSenha}
                        name='confirmaSenha'
                    ></input>
                    <label for='confirma-senha'></label>
                </div>

                <span className='span-erro'>{spanErro}</span>

                <div>
                    <button>Cadastrar</button>
                </div>

            </form>
        </main>
    )
}
export  {Instituicao}