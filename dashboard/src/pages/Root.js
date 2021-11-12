import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from '../components/store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';
import RoutesAluno from '../components/Routes/Aluno/Aluno';
import RoutesInstituicao from '../components/Routes/Instituicao/Instituicao';
import RoutesProfessor from '../components/Routes/Professor/Professor'

import Home from './Home/Home';
import HomeAluno from './Home/Aluno/Aluno';
import HomeInstituicao from './Home/Instituicao/Instituicao';
import HomeProfessor from './Home/Professor/Professor';

import Login from './Login/Login';
import Instituicao from './Cadastro/Instituicao/Instituicao';

export const PagesRoot = () => (
    <Router>
      <StoreProvider>
        <Switch>
          <Route path="/instituicao" component={Instituicao} />
          <Route path="/login" component={Login} />
          <RoutesPrivate path="/" component={Home} />
          <RoutesAluno path='/home/aluno' component={HomeAluno} />
          <RoutesInstituicao path='/home/instituicao' component={HomeInstituicao} />
          <RoutesProfessor path='/home/professor' component={HomeProfessor} />
        </Switch>
      </StoreProvider>
    </Router>
  )