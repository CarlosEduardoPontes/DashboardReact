import React, { useContext, useState } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreContext from '../../../components/store/Context';
import {SideBar} from '../../../components/SideBar'
import '../Home.css';

import { Alunos } from '../../Cadastro/Aluno/Alunos';
import { Professor } from '../../Cadastro/Professor/Professor';
import { Instituicao } from '../../Cadastro/Instituicao/Instituicao'
import { Materias } from '../../Cadastro/Materias/Materias';
import { Turmas } from '../../Cadastro/Turma/Turmas';
import { Exercicio } from '../../Cadastro/Professor/Exercicio';
import { Tarefa } from '../../Cadastro/Professor/Tarefa';
import { CorrigirTarefa } from '../../../components/Professor/Corrigirtarefas'
import { CorrecaoTarefa } from '../../../components/Professor/CorrecaoTarefa'
import { Mensagem } from '../../../components/Professor/Mensagens';

import { ProfAluno } from '../../../components/Professor/Aluno';
import { ProfessorMateria } from '../../../components/Professor/Materia';
import { ProfessorTurma } from '../../../components/Professor/Turma';
import { InstituicaoProfessor } from '../../../components/Instituicao/Professor';
import { ListarTarefa } from '../../../components/Professor/ListarTarefas'
import { ListarExercicios } from '../../../components/Professor/ListarExcercicios'
import OverviewProf from '../../../components/Instituicao/OverviewProf';

export const HomeProfessor = () => {
  return (
    <Router>
      <SideBar tipo='professor' />
      <Switch>
        <Route path='/home/professor' exact component={OverviewProf} />
        <Route path='overview' exact component={OverviewProf} /> 
        <Route path='/exercicios' exact component={Exercicio} />
        <Route path='/tarefas' exact component={Tarefa} />
        <Route path='/corrigirtarefas' exact component={CorrigirTarefa} />  
        <Route path='/correcaotarefas' exact component={CorrecaoTarefa} /> 
        <Route path='/alunos' exact component={Alunos} />
        <Route path='/professor' exact component={Professor} />
        <Route path='/instituicao' exact component={Instituicao} />
        <Route path='/materias' exact component={Materias} />
        <Route path='/turmas' exact component={Turmas} />  
        <Route path='/professor/alunos' exact component={ProfAluno} /> 
        <Route path='/professor/materias' exact component={ProfessorMateria} />
        <Route path='/instituicao/professor' exact component={InstituicaoProfessor} />
        <Route path='/professor/turmas' exact component={ProfessorTurma} /> 
        <Route path='/professor/tarefas' exact component={ListarTarefa} />  
        <Route path='/professor/exercicios' exact component={ListarExercicios} />
        <Route path='/mensagem' exact component={Mensagem} />
      </Switch>
    </Router>
  )
}


export default HomeProfessor;