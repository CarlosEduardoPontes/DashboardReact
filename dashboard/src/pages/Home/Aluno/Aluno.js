import React from 'react';
import '../Home.css';

import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreContext from '../../../components/store/Context';
import {SideBar} from '../../../components/SideBar';



function HomeAluno(){

  return (
    <Router>
    <SideBar tipo='aluno' />
    <p>Olá Aluno, seja bem vindo a sua tarefa</p>
    <Switch>
         
    </Switch>
  </Router>
  );
};

export default HomeAluno;