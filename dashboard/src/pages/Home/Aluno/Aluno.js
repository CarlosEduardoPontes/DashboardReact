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

            <Container className='table'>
              <Row>
                <Col xs={4} className='coluna'>
                  <h3>História</h3>
                  <p>Conteudo do campo historia</p>
                  <p>Conteudo do campo historia</p>
                  <p>Conteudo do campo historia</p>
                </Col>
                <Col sm={4} className='coluna'>
                  <h3>Geografia</h3>
                  <p>Conteudo do campo Geografia</p>
                  <p>Conteudo do campo Geografia</p>
                  <p>Conteudo do campo Geografia</p>
                </Col>
                <Col sm={4} className='coluna'>
                  <h3>Portugues</h3>
                  <p>Conteudo do campo Portugues</p>
                  <p>Conteudo do campo Portugues</p>
                  <p>Conteudo do campo Portugues</p>
                </Col>
              </Row>
            </Container> 
      <Switch> 
        <Route path='/home/aluno ' exact component={OverviewAluno} />
        <Route path='overview' exact component={OverviewAluno} />      
      </Switch>
    </Router>
  );
};

export default HomeAluno;