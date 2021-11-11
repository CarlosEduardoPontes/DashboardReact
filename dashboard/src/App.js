import './App.css';
import { SideBar } from './components/SideBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Alunos } from './pages/Alunos';
import { Professor } from './pages/Professor';


function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path='/alunos' exact component={Alunos} />
        <Route path='/professor' exact component={Professor} /> 
      </Switch>
    </Router>
  );
}

export default App;
