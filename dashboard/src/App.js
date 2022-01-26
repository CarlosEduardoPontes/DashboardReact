import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App';
import StoreProvider from './components/store/Provider';


import RoutesPrivate from './components/Routes/Private/Private';
import RoutesAluno from './components/Routes/Aluno/Aluno';
import RoutesInstituicao from './components/Routes/Instituicao/Instituicao';
import RoutesProfessor from './components/Routes/Professor/Professor';

import Login from './pages/Login/Login';

import Home from './pages/Home/Home';
import HomeAluno from './pages/Home/Aluno/Aluno';
import HomeInstituicao from './pages/Home/Instituicao/Instituicao';
import HomeProfessor from './pages/Home/Professor/Professor';

import { Instituicao } from './pages/Cadastro/Instituicao/Instituicao'

function App() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
            <Route path = '/instituicao' component={ Instituicao } />
            <Route path = '/login' component={ Login } />
            <RoutesAluno path='/home/aluno' component={HomeAluno} />
            <RoutesInstituicao path='/home/instituicao' component={HomeInstituicao} />
            <RoutesProfessor path='/home/professor' component={HomeProfessor} />
            <RoutesPrivate path = '/' component= { Home } />
            
        </Switch>
      </StoreProvider>
      
    </Router>
  );
}

export default App;
