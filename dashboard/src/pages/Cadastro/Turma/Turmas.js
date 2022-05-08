import React, { useContext, useEffect, useReducer } from 'react'
import { useState } from 'react/cjs/react.development'
import MateriaTurma from '../../../components/Instituicao/MateriaTurma/MateriaTurma';
import StoreContext from '../../../components/store/Context';
import Table from '../../../components/Table/Table'
import api from '../../../utils/api'
import handleChange from '../../../utils/handleChange';
import '../Cadastro.css'
import './Turma.css'

const initialState = () =>{
    return {
        'nome': '',
        'periodo': 'MANHA',
        'grau': '',
        'dataInicio': '',
        'duracaoMes': ''
    }
}

const Turmas = props =>{
    const { session } = useContext(StoreContext);

    const [form, setForm] = useState(initialState);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const [alunoDL, setAlunoDL] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [alunosTurma, setAlunosTurma] = useState([]);

    const [professores, setProfessores] = useState([]);

    const [materias, setMaterias] = useState([]);
    const [materiasTurma, setMateriasTurma] = useState([]);
    const [materiaDL, setMateriaDL] = useState('');

    const handleChange = (event) => {
        
        const { value, name } = event.target;
    
        setForm({
          ...form,
          [name]: value
        });
    }

    useEffect( () => {
        async function getAlunos(){
            const alunos = await api('/aluno/' + session.id, 'GET');

            setAlunos(alunos);
        }

        async function getProfessores(){
            const professores = await api('/professor/' + session.id, 'GET');

            setProfessores(professores);
        }

        async function getMaterias(){
            const materias = await api('/materia/' + session.id, 'GET');

            setMaterias(materias);
        }

        getAlunos();
        getProfessores();
        getMaterias();
    }, []);

    const handleAlunoDL = (event) => {
        const { value } = event.target;

        setAlunoDL( value );
    }

    const handleMateriaDL = (ev) =>{
        const {value} = ev.target;

        setMateriaDL( value );
    }

    const alunosColumns = [
        {
            'name' : 'identidade',
            'label': 'Identidade'
        },
        {
            'name': 'nome',
            'label': 'Nome'
        }
    ]

    function addAluno (event){
        event.preventDefault();

        const alunoFind = alunos.find( (aluno) => alunoDL == aluno.nome);

        if( typeof alunoFind !== 'undefined'){
            const alunoTabela = {
                id: alunoFind.id,
                values: [
                    {name: 'identidade', value: alunoFind.identidade},
                    {name: 'nome', value: alunoFind.nome}
                ]
            }

            console.log(alunosTurma);
            console.log(alunoTabela);

            const at = alunosTurma;
            at.push(alunoTabela);

            setAlunosTurma( at );
            forceUpdate();
        }
    }

    function addMateria(ev){
        ev.preventDefault();

        const materiaFind = materias.find( materia => materiaDL == materia.nome);

        if (typeof materiaFind !== 'undefined'){
            materiaFind.professores = [];

            const mt = materiasTurma;
            mt.push(materiaFind);

            console.log(mt);

            setMateriasTurma(mt);
        }

        forceUpdate();
    }

    function addProfessorMateria(materia, professor){
        const materiasNew = materiasTurma;

        const materiaIndex = materiasNew.findIndex( (m) => m.nome === materia.nome);

        materiasNew[materiaIndex].professores.push(professor);

        forceUpdate();
    }

    function renderAlunosOptions(){
        return alunos.map( aluno => 
            (
                <option>{aluno.nome}</option>
            )
        )
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        form.idInstituicao = session.id;
        form.alunos = alunosTurma;
        form.materias = materiasTurma;

        console.log(form);

        api('/turma', 'POST', form)
            .then( () => alert('Cadastro efetuado com sucesso!'))
            .catch( err => {console.log(err); alert('Falha ao cadastrar!')});
    }

    return(
        <main class='container'>
            <form onSubmit={onSubmit} class='card'>
               
                <div className='div-form-main'>
                    <h3 className='h3-titulo'>Cadastro de Turmas</h3>
                    <div class='label-float'>
                        <input 
                            type='text' 
                            placeholder='Nome da Turma*'
                            onChange={handleChange}
                            defaultValue={form.nome}
                            name='nome'
                        ></input>
                    </div>
                                
                    <div class='label-float'>
                        <select
                            type='text' 
                            placeholder='Período *'
                            onChange={handleChange}
                            defaultValue={form.periodo}
                            name='periodo'
                        >
                            <option value='MANHA'>Manhã</option>
                            <option value='TARDE'>Tarde</option>
                            <option value='NOITE'>Noite</option>
                            <option value='INTEGRAL'>Integral</option>
                        </select>
                    </div>
                
                    <div class='label-float'>
                        <input 
                            type='number' 
                            placeholder='Grau *'
                            onChange={handleChange}
                            defaultValue={form.grau}
                            name='grau'
                        ></input>
                    </div>
                
                    <div class='label-float'>
                        <input 
                            type='date' 
                            placeholder="Data de Início"
                            onChange={handleChange}
                            defaultValue={form.dataInicio}
                            name='dataInicio'
                        ></input>
                    </div>

                    <div class='label-float'>
                        <input 
                            type='number' 
                            placeholder="Duração (em meses)"
                            onChange={handleChange}
                            defaultValue={form.duracaoMes}
                            name='duracaoMes'
                        ></input>
                    </div>

                </div>

                <div className='div-alunos'>
                    <h4 className='h4-turma'>Alunos</h4>
                    <div class='label-float'>
                        <input 
                            defaultValue={alunoDL}  
                            type='text' 
                            autoComplete='off' 
                            className='datalist-alunos' 
                            placeholder="Digite o nome do aluno *" 
                            list='alunos' 
                            onChange={handleAlunoDL}
                        />
                        <datalist id='alunos'>
                        {renderAlunosOptions()}
                        </datalist>

                        <button onClick={addAluno} className='btn-add'>Adicionar</button>
                    </div>
                    <div className='div-tbl-alunos'>
                        <Table className='tbl-alunos' columns={alunosColumns} itens={alunosTurma}/>
                    </div>
                </div>

                <div className='div-materias'>
                <h4 className='h4-turma'>Matérias</h4>
                    <div class='label-float'>
                        <input 
                            defaultValue={materiaDL}
                            type='text' 
                            className='datalist-materias' 
                            placeholder="Digite o nome da matéria" 
                            list='materias'
                            onChange={handleMateriaDL}
                        />
                        <datalist id='materias'>
                        {
                            materias.map( materia => ( <option>{materia.nome}</option> ))
                        }
                        </datalist>

                        <button onClick={addMateria} className='btn-add'>Adicionar</button>
                    </div>
                    {
                        materiasTurma.map( materiaTurma => (
                            <MateriaTurma 
                                materia={materiaTurma} 
                                professores={professores} 
                                addProfessorMateria={addProfessorMateria}
                            />
                        ))
                    }
                </div>
                
                <div>
                    <button className='botao-cadastrar'>Cadastrar</button>
                </div>

            </form>
        </main>
        
    )
}

export {Turmas};