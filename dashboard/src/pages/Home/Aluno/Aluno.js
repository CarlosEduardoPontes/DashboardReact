import React from 'react';
import '../Home.css';
import { Container, Row, Col } from 'react-grid-system';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreContext from '../../../components/store/Context';
import {SideBar} from '../../../components/SideBar';

import OverviewAluno from '../../../components/Instituicao/OverviewAluno'


function HomeAluno(){

  return (
    <Router>
      <SideBar tipo='aluno' /> 
            <h1>texto</h1>
            <div >
              texto 2
            </div>     
      <Switch> 
        <Route path='/home/aluno ' exact component={OverviewAluno} />
        <Route path='overview' exact component={OverviewAluno} />      
      </Switch>
    </Router>
  );
};

export default HomeAluno;