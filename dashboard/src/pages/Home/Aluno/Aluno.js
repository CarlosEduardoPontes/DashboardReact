import React from 'react';
import '../Home.css';
import { Container, Row, Col } from 'react-grid-system';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreContext from '../../../components/store/Context';
import {SideBar} from '../../../components/SideBar';
import OverviewAluno from '../../../components/Instituicao/OverviewAluno'
import { Tarefa } from '../../Cadastro/Aluno/Tarefa'
import { ListarAlunoTarefa } from '../../../components/Aluno/ListarAlunoTarefa'
import { Mensagem } from '../../../components/Aluno/Mensagem'

function HomeAluno(){

  return (
    <Router>
      <SideBar tipo='aluno' />      
      <Switch> 
        <Route path='/home/aluno' exact component={OverviewAluno} />
        <Route path='/overview' exact component={OverviewAluno} />  
        <Route path='/tarefas' exact component={Tarefa} />  
        <Route path='/aluno/tarefas' exact component={ListarAlunoTarefa} />
        <Route path='/mensagens' exact component={Mensagem} />   
      </Switch>
    </Router>
  );
};

export default HomeAluno;