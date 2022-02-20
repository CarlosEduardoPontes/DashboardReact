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
import { InstituicaoAluno } from '../../../components/Instituicao/Aluno';
import { InstituicaoMateria } from '../../../components/Instituicao/Materia';
import { InstituicaoProfessor } from '../../../components/Instituicao/Professor';
import { InstituicaoTurma } from '../../../components/Instituicao/Turma';
import OverviewProf from '../../../components/Instituicao/OverviewProf';

export const HomeProfessor = () => {
  return (
    <Router>
      <SideBar tipo='professor' />
      <Switch>
        <Route path='/home/professor ' exact component={OverviewProf} />
        <Route path='overview' exact component={OverviewProf} /> 
        <Route path='/exercicios' exact component={Exercicio} />
        <Route path='/tarefas' exact component={Tarefa} />
        <Route path='/alunos' exact component={Alunos} />
        <Route path='/professor' exact component={Professor} />
        <Route path='/instituicao' exact component={Instituicao} />
        <Route path='/materias' exact component={Materias} />
        <Route path='/turmas' exact component={Turmas} />  

        <Route path='/instituicao/alunos' exact component={InstituicaoAluno} />
        <Route path='/instituicao/materias' exact component={InstituicaoMateria} />
        <Route path='/instituicao/professor' exact component={InstituicaoProfessor} />
        <Route path='/instituicao/turma' exact component={InstituicaoTurma} />   
      </Switch>
    </Router>
  )
}


export default HomeProfessor;