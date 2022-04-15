import React, { useContext, useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios'
import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';
import '../Cadastro.css'
/**
 * 
 * @returns objeto JSON
 */
const initialState = () => {
    return {
        'idMateria': '',
        'titulo': '',
        'desc': '',
        'categoria': ''
    }
}

export const Exercicio = props =>{
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

       
             api('/professor', 'POST', form)
            .then( () => alert('Cadastro efetuado com sucesso!'))
            .catch( err => {console.log(err); alert('Falha ao cadastrar!')}); 
        
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
                <h3>Cadastro de Exercício</h3>
                
                
               
                
                <div class='label-float'>
                    <input 
                        type='text' 
                        placeholder='Título *'
                        onChange={handleChange}
                        defaultValue={form.titulo}
                        name='titulo'
                    ></input>
                    <label for='titulo'></label>
                </div>
                
                <div class='label-float'>
                    <textarea 
                        type='text' 
                        placeholder='Enunciado *'
                        onChange={handleChange}
                        defaultValue={form.desc}
                        name='desc'
                    ></textarea>
                </div>
                
                <div class='label-float'>
                    <select onChange={handleChange} defaultValue={form.categoria}>
                        <option value="">Selecione a categoria</option>
                        <option value="ALTERNATIVA">Alternativa</option>
                        <option value="DISSERTATIVA">Dissertativa</option>
                        <option value="CALCULO">Cálculo</option>
                    </select>
                </div>

                <span className='span-erro'>{spanErro}</span>
                
                <div>
                    <button>Cadastrar</button>
                </div>

            </form>
        </main>
        
    )
}