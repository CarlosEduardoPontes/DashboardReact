import './App.css';
import { SideBar } from './components/SideBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Alunos } from './pages/Cadastro/Aluno/Alunos'
import { Professor } from './pages/Cadastro/Professor/Professor';
import { Instituicao } from './pages/Cadastro/Instituicao/Instituicao'
import { Materias } from './pages/Cadastro/Materias/Materias';
import { Turmas } from './pages/Cadastro/Turma/Turmas';

import { InstituicaoAluno } from '../../dashboard/src/components/Instituicao/Aluno';

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path='/alunos' exact component={Alunos} />
        <Route path='/professor' exact component={Professor} />
        <Route path='/instituicao' exact component={Instituicao} />
        <Route path='/materias' exact component={Materias} />
        <Route path='/turmas' exact component={Turmas} />  

        <Route path='/instituicao/alunos' exact component={InstituicaoAluno} />   
      </Switch>
    </Router>
  );
}

export default App;
