import React, { useContext, useState, useEffect, useReducer } from 'react';
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
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const { session } = useContext(StoreContext);

    const [spanErro, setSpanErro] = useState('');
    const [form, setForm] = useState(initialState);

    const [selectOptions, setSelectOptions] = useState([]);
    const [name, setName] = useState('');
    const [id, setId] = useState(0);

    const [materia, setMateria] = useState([]);

    const [alternativa, setAlternativa] = useState([]);

    const handleChange = (event) => {
        
        const { value, name } = event.target;

        setForm({
          ...form,
          [name]: value
        });
        console.log(form);
    }

    const handleCategoria = (e) => {

        setForm(
            {
                ...form,
                categoria: e.target.value
            }
        );
    }

    const handleMateria = (e) => {

        setForm(
            {
                ...form,
                idMateria: e.target.value
            }
        );
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        form.idProfessor = session.id;
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

      const getMateria = async () => {
        const materias = await api('/list/professor/materia/' + session.id, 'POST', form);

        setMateria(materias);
      };

      useEffect( () => {
        //componentDidMount();
        getMateria();
      }, []);

      const addAlternativa = () =>{
        const novaAlternativa = {
            numerador: alternativa.length + 1,
            resposta: ''
        }

        const alternativas = alternativa;
        alternativas.push(novaAlternativa);

        setAlternativa(alternativas);

        console.log(alternativa);
        forceUpdate();
      };

      const removeAlternativa = () =>{
        const alternativas = alternativa;
        alternativas.pop();

        setAlternativa(alternativas);

        console.log(alternativa);
        forceUpdate();
      };

      const handleAlternativa = (event) => {
        const { value, name } = event.target;

        const alternativas = alternativa;
        alternativas[name - 1] = {
            numerador:alternativas[name-1]['numerador'],
            resposta: value
        }

        setAlternativa(alternativas);

        console.log(alternativa);
      }

      function renderiza(){
          
        if(form.categoria === 'ALTERNATIVA'){

          return(
            <>
                <div>
                    <button type='button' className='btn-add-alternativa' onClick={addAlternativa}>Adicionar Alternativas</button>
                    <button type='button' className='btn-remove-alternativa' onClick={removeAlternativa}>Remover Alternativas</button>
                </div><br></br>

                <div>
                    {alternativa.map( a => {

                        const textarea = (
                            <textarea 
                            type='text' 
                            placeholder={'Alternativa '+a.numerador}
                            onChange={handleAlternativa}
                            defaultValue={a.resposta}
                            name={a.numerador}
                        ></textarea>
                        );

                        return textarea
                    }
                        
                    )}
                </div>
            </>
                );
        }
        else{
            return null;
        }  

      }

    return(
        <main class='container'>
            <form class='card' onSubmit={onSubmit}>
                <h3>Cadastro de Exercício</h3>
                
                <div class='label-float'>
                    <select onChange={handleMateria} defaultValue={form.idMateria}>
                        {materia.map( m => 
                            <option >teste</option>
                            )}
                    </select>
                </div>

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
                    <select onChange={handleCategoria} defaultValue={form.categoria}>
                        <option value="">Selecione a categoria</option>
                        <option value="ALTERNATIVA">Alternativa</option>
                        <option value="DISSERTATIVA">Dissertativa</option>
                        <option value="CALCULO">Cálculo</option>
                    </select>
                </div>
                {
                    renderiza()
                }
                
                <span className='span-erro'>{spanErro}</span>
                
                <div>
                    <button>Cadastrar</button>
                </div>

            </form>
        </main>
        
    )
}