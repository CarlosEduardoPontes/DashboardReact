import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../store/Context';
import logo from '../../../Images/bem-vindo.jpg'
import './Login.css'; 
import api from '../../../utils/api';

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

/**
 * Efetua a autenticação do usuário via API
 * @user {string} Usuario ou email
 * @password {string} Senha do usuário 
 */
async function authenticate( user, password){
    return await api('/login', 'POST', {usuario: user, senha: password});
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setSession } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  async function onSubmit(event) {
    event.preventDefault();

    //const { token, error } = login(values); //Método sem API
    const retorno = await authenticate(values.user, values.password);
console.log(retorno);

    const {id, token, error, usuario, categoria} = retorno;
    if (token) {
      setSession({id, token, usuario, categoria});
      return history.push('/');
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <main>
      <header></header>
      <aside className="logo-login">
      <a href='/'>
            <img src={logo} alt='Conecta'/>
        </a>
      </aside>

      <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}

        <button type='submit' className='user-login__submit-button'>
        Entrar
        </button>
        {/* <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton> */}
      </form>
    </div>
    <footer>
        <div className='div-registrar'>
            Sua Instituição ainda não está registrada? <a href="/instituicao" className='a-registrar'>Cadastre-se!</a>
        </div>
        <span className='copy'>2021 Conecta - Todos os direitos reservados</span>
    </footer>
    </main>
    
  );
};

export default UserLogin;