import React, { useState, useEffect } from 'react';
import Table from '../../../components/Table/Table';
import api from '../../../utils/api';
import '../Cadastro.css'


export const Turmas = props =>{
    const [alunoDL, setAlunoDL] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [alunosTurma, setAlunosTurma] = useState([]);

    useEffect( () => {
        async function getAlunos(){
            const alunos = await api('/aluno', 'GET');

            setAlunos(alunos);
        }

        getAlunos();
    }, []);

    const handleAlunoDL = (event) => {
        const { value } = event.target;

        setAlunoDL( value );
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
            
        }
    }

    return(
        <main class='container'>
            <form class='card'>
               
                <div className='div-form-main'>
                    <h3 className='h3-titulo'>Cadastro de Turmas</h3>
                    <div class='label-float'>
                        <input type='number' placeholder='Nome *'></input>
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
                        {alunos.map( aluno => 
                            (
                                <option>{aluno.nome}</option>
                            )
                        )}
                        </datalist>

                        <button onClick={addAluno} className='btn-add'>Adicionar</button>
                    </div>
                    <Table className='tbl-alunos' columns={alunosColumns} itens={alunosTurma}/>
                </div>

                <div className='div-materias'>
                <h4 className='h4-turma'>Matérias</h4>
                    <div class='label-float'>
                        <input type='text' className='datalist-materias' placeholder="Digite o nome da matéria" list='materias' />
                        <datalist id='materias'>
                        </datalist>

                        <button className='btn-add'>Adicionar</button>
                    </div>
                </div>
                
                <div>
                    <button>Cadastrar</button>
                </div>

            </form>
        </main>
        
    )
}