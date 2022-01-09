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
    <Switch>
         
    </Switch>
  </Router>
  );
};

export default HomeAluno;