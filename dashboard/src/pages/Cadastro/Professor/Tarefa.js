import React, { useContext, useEffect, useState, useReducer } from 'react';

import lixeira from '../../../Images/delete.svg';

import StoreContext from '../../../components/store/Context';
import api from '../../../utils/api';
import '../Cadastro.css'

const initialState = () => {
    return {
        'idMateriaTurma': '',
        'idTurma': '',
        'titulo': '',
        'desc': '',
        'pontos': 0,
        'dtComeco': '',
        'dtFim': '',
        'exercicios': []
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

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    //ID contador na tabela de exercícios
    let idExercicio = 0;

    const handleChange = (event) => {
        
        const { value, name } = event.target;
    
        setForm({
          ...form,
          [name]: value
        });
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        form.idProfessor = session.id;

        form.pontos = form.exercicios.reduce( (nota, add) => nota + Number(add.pontos), 0);


        const materiaTurma = materia.find( m => m.id == form.idMateriaTurma);

        form.idMateriaTurma = materiaTurma.materia_turma_id;

        form.dtComeco = form.dtComeco.split('T').join(' ');

        form.dtFim = form.dtFim.split('T').join(' ');
       
        console.log(form);
        
        api('/tarefa', 'POST', form)
        .then( () => alert('Cadastro efetuado com sucesso!'))
        .catch( err => {console.log(err); alert('Falha ao cadastrar!')});
    } 
    
      const handleChangeMateria = (e) =>{
       setId(e.value)
       setName(e.label)
      }

      const addExercicio = () => {
          const id = form.idExercicio;

          const ex = exercicio.find( e => e.id == id);

          const f = form;

          ex.numerador = f.exercicios.length + 1;

          console.log(ex);

          f.exercicios.push(ex);

          setForm(f);

          forceUpdate();
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
            const materias = await api('/turma/materia/' + form.idTurma, 'GET', form);
    console.log(materias);
            setMateria(materias);
    
            const f = form;
            //f.idMateriaTurma = '';
            f.idMateriaTurma = materias[0].id;
            setForm(f);
      };

        const getExercicio = async () => {
            const exercicios = await api('/exercicio/materia/'+ form.idMateriaTurma + '/professor/' + session.id, 'GET', form);
            console.log(exercicios);
            setExercicio(exercicios);

            const f = form;
            if(exercicios.length > 0){
                f.idExercicio = exercicios[0].id;
            }
            else{
                f.idExercicio = '';
            }

            setForm(f);
        };
      
      const handleMateria = (e) => {

        setForm(
            {
                ...form,
                idMateriaTurma: e.target.value
            }
        );
        }

        const handleExercicio = (e) => {

            setForm(
                {
                    ...form,
                    idExercicio: e.target.value
                }
            );
        }

      useEffect( async () => {
        await getTurma()
        await getMateria();
        //await getExercicio();
      }, []);

      useEffect( async () => {
        if(form.idTurma !== ''){
            await getMateria();
        }
      }, [form.idTurma]);

      useEffect( async () => {
        if(form.idMateriaTurma !== ''){
            await getExercicio();
        }
        
      }, [form.idMateriaTurma]);


      const handleTurma = (e) => {

        setForm(
            {
                ...form,
                idTurma: e.target.value
            }
        );
        
    }

    const removerTarefa = (id) => {
        const f = form;

        f.exercicios.splice(id, 1);

        setForm(f);

        forceUpdate();
        console.log(f);
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
                    <label>Data de ínicio: </label>
                    <input 
                        type='datetime-local' 
                        placeholder='Data de ínicio *'
                        onChange={handleChange}
                        defaultValue={form.dtComeco}
                        name='dtComeco'
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

                {
                    form.idTurma != '' ?
                    <> 
                    <div class='label-float'>
                <label>Matéria:&nbsp;</label>
                    <select onChange={handleMateria} defaultValue={form.idMateriaTurma}>
                        <option value=''>Selecione um</option>
                        {materia.map( m => 
                            <option value={m.id}>{m.nome}</option>
                            )}
                    </select>
                </div>

                {
                    form.idMateria !== ''? 
                    <>
                        <div class='label-float'>
                            <label>Exercício:&nbsp;</label>
                            <select onChange={handleExercicio} defaultValue={form.idExercicio}>
                                {exercicio.map( ex => 
                                <option value={ex.id}>{ex.titulo}</option>
                                )}
                            </select>
                        </div>
                        <button type='button' className='btn-add-exercicio' onClick={addExercicio} >Adicionar Exercício</button>
                    </>:null
                }
                
                </>:null
                }

                <div className='div-table'>
                    <table className={props.className}>
                        <thead>
                            <tr>
                                <th>Exercício</th>
                                <th>Pontuação</th>
                            </tr>
                        </thead>
            
                        <tbody>
                            {
                                form.exercicios.length > 0 ? form.exercicios.map(
                                    item => {

                                        //encontrando a posição em array do item atual
                                        const itemId = form.exercicios.findIndex( e => e.id == item.id);
                                        return (
                                        <tr key={item.id}>
                                            <td>{item.titulo}</td>
                                            <td>
                                                <input 
                                                    type="number" 
                                                    className={'pontuacao'+item.id} 
                                                    defaultValue={form.exercicios[itemId].pontos} 
                                                    onChange={
                                                        ev => {
                                                            const f = form;

                                                            f.exercicios[itemId].pontos = ev.target.value;

                                                            setForm(f);

                                                            console.log(f);
                                                        }
                                                    }
                                                />

                                                <img src={lixeira} alt="Deletar" className='img-lixeira' onClick={() => removerTarefa(itemId)} />
                                            </td>
                                        </tr>);
                                    }
                                ) : ''
                            }
                        </tbody>
            
                    </table>
                </div>

                <span className='span-erro'>{spanErro}</span>
                
                <div>
                    <button>Cadastrar</button>
                </div>

            </form>
        </main>
        
    )
}