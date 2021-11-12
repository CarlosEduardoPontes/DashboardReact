import React, { useContext } from 'react';
import StoreContext from '../../components/store/Context';
import './Home.css';

import { Redirect, useHistory} from 'react-router-dom';


const getRoute = (categoria) => {
    switch (categoria) {
        case 'ALUNO':
            return '/home/aluno';
        case 'INSTITUICAO':
            return '/home/instituicao';
        case 'PROFESSOR':
            return '/home/professor';
        default:
            return null;
    }
}


const PagesHome = () => {
  const { session } = useContext(StoreContext);
  
  const history = useHistory();
  const route = getRoute(session.categoria);

  if(route !== null){
    history.push(route);
  }
  return (
      <div>p</div>
  );
};

export default PagesHome