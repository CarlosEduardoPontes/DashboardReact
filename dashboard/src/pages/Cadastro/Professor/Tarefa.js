import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select'
import axios from 'axios'
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';
import '../Cadastro.css'

const initialState = () => {
    return {
        'idMateriaTurma': '',
        'titulo': '',
        'desc': '',
        'pontos': '',
        'dtComeco': '',
        'dtFim': ''
    }
}

export const Tarefa = props =>{
    const { session } = useContext(StoreContext);

    const [spanErro, setSpanErro] = useState('');
    const [form, setForm] = useState(initialState);

    const [selectOptions, setSelectOptions] = useState([]);
    const [name, setName] = useState('');
    const [id, setId] = useState(0);

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
    const  getOptions = async() =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = res.data
    
        const options = data.map(d => ({
          "value" : d.id,
          "label" : d.name
    
        }))
    
        setSelectOptions(options)
    
      }
    
      const handleChangeMateria = (e) =>{
       setId(e.value)
       setName(e.label)
      }
    
      const componentDidMount = () =>{
        getOptions()
      }

      
      useEffect( () => {
        componentDidMount();
      }, []);

    return(
        <main class='container'>
            <form class='card' onSubmit={onSubmit}>
                <h3>Cadastro de Tarefas</h3>
                
                
                <div class='label-float'>
                     <Select 
                        options={selectOptions} 
                        onChange={handleChangeMateria.bind(this)} 
                    />
                    <p>
                        You have selected <strong>{name}</strong> 
                        whose id is <strong>{id}</strong>
                    </p>
                </div>
                
                <div class='label-float'>
                    <input 
                        type='text' 
                        placeholder='Título da Tarefa *'
                        onChange={handleChange}
                        defaultValue={form.titulo}
                        name='titulo'
                    ></input>
                    <label for='titulo'></label>
                </div>
                
                <div class='label-float'>
                    
                    <textarea 
                        type='text' 
                        placeholder='Descrição da tarefa *'
                        onChange={handleChange}
                        defaultValue={form.desc}
                        name='desc'
                    ></textarea>
                    <label for='desc'></label>
                </div>

                <div class='label-float'>
                    <input 
                        type='number'
                        placeholder='Pontuação *'
                        onChange={handleChange}
                        defaultValue={form.pontos}
                        name='pontos'
                    ></input>
                    <label for='pontos'></label>
                </div>

                <div class='label-float'>
                    <label>Data de ínicio</label>
                    <input 
                        type='datetime-local' 
                        placeholder='Data de ínicio *'
                        onChange={handleChange}
                        defaultValue={form.dtComeco}
                        name='dfComeco'
                    ></input>
                </div>

                <div class='label-float'>
                    <label>Data de Fim</label><br/>
                    <input 
                        type='datetime-local'
                        placeholder='Data do fim da Tarefa *'
                        onChange={handleChange}
                        defaultValue={form.dtFim}
                        name='dtFim'
                    ></input>
                </div>

                <span className='span-erro'>{spanErro}</span>
                
                <div>
                    <button>Cadastrar</button>
                </div>

            </form>
        </main>
        
    )
}