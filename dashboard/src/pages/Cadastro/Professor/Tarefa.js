import React, { useContext, useEffect, useState } from 'react';
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
    const [turma, setTurma] = useState([]);
    const [materia, setMateria] = useState([]);
    const [exercicio, setExercicio] = useState([]);
    const [spanErro, setSpanErro] = useState('');
    const [form, setForm] = useState(initialState);

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
    
      const handleChangeMateria = (e) =>{
       setId(e.value)
       setName(e.label)
      }

      const getTurma = async () => {
        const turmas = await api('/list/professor/turma/' + session.id, 'GET', form);
console.log(turmas);
        setTurma(turmas);

        const f = form;
        f.idTurma = turmas[0].id;
        setForm(f);
      }
        const getMateria = async () => {
            const materias = await api('/list/professor/materia/' + session.id, 'GET', form);
    console.log(materias);
            setMateria(materias);
    
            const f = form;
            f.idMateria = materias[0].id;
        setForm(f);
      };

        const getExercicio = async () => {
        const exercicios = await api('/list/professor/materia/' + session.id, 'GET', form);
        console.log(exercicios);
        setExercicio(exercicios);

        const f = form;
        f.idExercicio = exercicios[0].id;
        setForm(f);
        };
      
      const handleMateria = (e) => {

        setForm(
            {
                ...form,
                idMateria: e.target.value
            }
        );
        }

        const handleExercicio = (e) => {

            setForm(
                {
                    ...form,
                    idExcercicio: e.target.value
                }
            );
        }

      useEffect( () => {
        getTurma()
        getMateria()
        getExercicio()
      }, []);

      const handleTurma = (e) => {

        setForm(
            {
                ...form,
                idTurma: e.target.value
            }
        );
        
    }

    return(
        <main class='container'>
            <form class='card' onSubmit={onSubmit}>
                <h3>Cadastro de Tarefas</h3>
                
                <div class='label-float'>
                    <label>Turma:&nbsp;</label>
                    <select onChange={handleTurma} defaultValue={form.idTurma}>
                        {turma.map( t => 
                            <option value={t.id}>{t.nome}</option>
                            )}
                    </select>
                </div>

                <div class='label-float'>
                <label>Matéria:&nbsp;</label>
                    <select onChange={handleMateria} defaultValue={form.idMateria}>
                        {materia.map( m => 
                            <option value={m.id}>{m.nome}</option>
                            )}
                    </select>
                </div>

                <div class='label-float'>
                <label>Exercício:&nbsp;</label>
                    <select onChange={handleExercicio} defaultValue={form.idExercicio}>
                        {exercicio.map( ex => 
                            <option value={ex.id}>{ex.nome}</option>
                            )}
                    </select>
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
                    <label>Data de ínicio: </label>
                    <input 
                        type='datetime-local' 
                        placeholder='Data de ínicio *'
                        onChange={handleChange}
                        defaultValue={form.dtComeco}
                        name='dfComeco'
                    ></input>
                </div>

                <div class='label-float'>
                    <label>Data de Fim: </label>
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