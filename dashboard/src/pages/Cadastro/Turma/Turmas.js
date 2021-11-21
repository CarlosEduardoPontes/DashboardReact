import React, { useEffect, useReducer } from 'react'
import { useState } from 'react/cjs/react.development'
import MateriaTurma from '../../../components/Instituicao/MateriaTurma/MateriaTurma';
import Table from '../../../components/Table/Table'
import api from '../../../utils/api'
import '../Cadastro.css'
import './Turma.css'

const Turmas = props =>{
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const [alunoDL, setAlunoDL] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [alunosTurma, setAlunosTurma] = useState([]);

    const [professores, setProfessores] = useState([]);

    const [materias, setMaterias] = useState([]);
    const [materiasTurma, setMateriasTurma] = useState([]);
    const [materiaDL, setMateriaDL] = useState('');

    useEffect( () => {
        async function getAlunos(){
            const alunos = await api('/aluno', 'GET');

            setAlunos(alunos);
        }

        async function getProfessores(){
            const professores = await api('/professor', 'GET');

            setProfessores(professores);
        }

        async function getMaterias(){
            const materias = await api('/materia', 'GET');

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


    return(
        <main class='container'>
            <form class='card'>
               
                <div className='div-form-main'>
                    <h3 className='h3-titulo'>Cadastro de Turmas</h3>
                    <div class='label-float'>
                        <input type='text' placeholder='Nome *'></input>
                        <label for='id_instituicao'></label>
                    </div>
                                
                    <div class='label-float'>
                        <input type='text' placeholder='Período *'></input>
                        <label for='nome'></label>
                    </div>
                
                    <div class='label-float'>
                        <input type='number' placeholder='Grau *'></input>
                        <label for='identidade'></label>
                    </div>
                
                    <div class='label-float'>
                        <input type='date' placeholder="Data de Início"></input>
                        <label for='data_nasc'></label>
                    </div>

                    <div class='label-float'>
                        <input type='number' placeholder="Duração (em meses)"></input>
                        <label for='duracao'></label>
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
                            placeholder="Digite o nome do aluno" 
                            list='alunos' 
                            onChange={handleAlunoDL}
                        />
                        <datalist id='alunos'>
                        {renderAlunosOptions()}
                        </datalist>

                        <button onClick={addAluno} className='btn-add'>Adicionar</button>
                    </div>
                    <Table className='tbl-alunos' columns={alunosColumns} itens={alunosTurma}/>
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
                    <button>Cadastrar</button>
                </div>

            </form>
        </main>
        
    )
}

export {Turmas};